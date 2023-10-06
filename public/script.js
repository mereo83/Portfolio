*// Smooth scrolling for navigation links
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
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const contactForm = document.querySelector('form');
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
function toggleReadMore() {
    const readMoreContent = document.getElementById("read-more-content");
    const blogPost4 = document.getElementById("blog-post-4");

    if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
        readMoreContent.style.display = "block";
        blogPost4.scrollIntoView({ behavior: "smooth" }); // Scroll to the expanded content
    } else {
        readMoreContent.style.display = "none";
    }
}

// Additional script to show success message after form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        successMessage.style.display = 'none'; // Hide success message initially
    });
});
