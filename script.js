// Navigation functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (!burger || !nav) return;
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Scroll effect for header
const scrollHeader = () => {
    const header = document.querySelector('header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
};

// Modal functionality for resume
const resumeModal = () => {
    const modal = document.getElementById('resume-modal');
    const resumeBtn = document.querySelector('.resume-btn');
    const closeBtn = document.querySelector('.close-btn');
    const closeModalBtn = document.querySelector('.close-modal');
    
    if (!modal || !resumeBtn) return;
    
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
};

// Form submission handling
const formSubmit = () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it and reset the form
            console.log('Form Submitted:', { name, email, message });
            
            // Reset form
            form.reset();
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
};

// Smooth scrolling for navigation links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile menu if open
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                if (burger) burger.classList.remove('toggle');
                document.querySelectorAll('.nav-links li').forEach(link => {
                    link.style.animation = '';
                });
            }
            
            // Scroll to target
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Add animation class to sections on scroll
const animateSections = () => {
    const sections = document.querySelectorAll('section');
    
    if (sections.length === 0) return;
    
    const checkScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
            }
        });
    };
    
    // Check on initial load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
};

// Check if DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    try {
        navSlide();
        scrollHeader();
        resumeModal();
        formSubmit();
        smoothScroll();
        animateSections();
        
        console.log('Portfolio scripts initialized successfully');
    } catch (error) {
        console.error('Error initializing portfolio scripts:', error);
    }
});
