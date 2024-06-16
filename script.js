// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!name || !email || !phone || !message) {
            e.preventDefault();
            alert('All fields are required.');
        }
    });
});
