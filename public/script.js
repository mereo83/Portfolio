// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(targetId);

        window.scrollTo({
            top: scrollTarget.offsetTop - 50, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('#contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const contactForm = document.querySelector('#contact-form');
    const formData = new FormData(contactForm);
    const successMessage = document.getElementById('success-message');

    try {
        const response = await fetch('/contact', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Message sent successfully.');
            contactForm.reset(); // Clear the form
            successMessage.style.display = 'block'; // Display success message
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again later.');
    }
});

// JavaScript to toggle the "Read More" content
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButton = document.getElementById("read-more-button");
    const readLessButton = document.getElementById("read-less-button");
    const aiToolsPartial = document.getElementById("ai-tools-partial");
    const aiToolsFull = document.getElementById("ai-tools-full");

    readMoreButton.addEventListener('click', function () {
        aiToolsPartial.style.display = "none";
        aiToolsFull.style.display = "block";
    });

    readLessButton.addEventListener('click', function () {
        aiToolsFull.style.display = "none";
        aiToolsPartial.style.display = "block";
    });
});


