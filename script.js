// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

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

// Animation for sections on scroll and click
const animateSection = (section) => {
    section.classList.add('animate');
};

// Scroll Animation
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSection(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// Update smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const sectionTop = targetSection.offsetTop;
            const windowHeight = window.innerHeight;
            const sectionHeight = targetSection.offsetHeight;
            
            // Calculate the scroll position to center the section
            const scrollPosition = sectionTop - headerHeight - (windowHeight - sectionHeight) / 2;
            
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });

            // Animate the section when clicking navigation
            animateSection(targetSection);
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('تم إرسال رسالتك بنجاح!');
    contactForm.reset();
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Add animation to service cards on scroll
const cardObserverOptions = {
    threshold: 0.5
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, cardObserverOptions);

document.querySelectorAll('.service-card').forEach(card => {
    cardObserver.observe(card);
}); 