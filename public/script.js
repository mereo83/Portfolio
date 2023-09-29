try {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Display a simple alert indicating success or error
            this.reset(); // Clear the form
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred. Please try again later.');
        });
    });
} catch (error) {
    console.error('An error occurred in the JavaScript code:', error);
    alert('An error occurred. Please try again later.');
}

// script.js

// Add this script to show the success message after form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const successMessage = document.getElementById('success-message');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // You can perform additional actions here, such as sending data to the server
  
      // Display the success message
      successMessage.style.display = 'block';
    });
  });
  