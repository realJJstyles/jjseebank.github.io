// Wait for the DOM to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add some basic form validation
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.querySelector('input[name="name"]');
            const email = document.querySelector('input[name="email"]');
            const message = document.querySelector('textarea[name="message"]');
            
            if (!name.value) {
                alert('Please enter your name.');
                event.preventDefault();
            } else if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            } else if (!message.value) {
                alert('Please enter your message.');
                event.preventDefault();
            } else {
                // Here you would typically send the form data to the server
                alert('Thank you for your message! We will get back to you soon.');
                // Prevent form submission for this example
                event.preventDefault();
            }
        });
    }

    // Hover effect for product images if we want to enhance visual feedback
    document.querySelectorAll('.product img').forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});