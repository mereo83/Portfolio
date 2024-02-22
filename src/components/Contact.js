import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null
  });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      setNotification('Please fill out all required fields');
      return;
    }

    // Continue with form submission
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('file', formData.file);

      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setNotification('Form submitted successfully');
        // Clear form data after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
          file: null
        });
      } else {
        setNotification('Form submission failed');
        // Handle errors or show an error message to the user
      }
    } catch (error) {
      setNotification('An error occurred during form submission');
      console.error('An error occurred during form submission:', error);
      // Handle errors or show an error message to the user
    }
  };

  return (
    <section id="contact" className="mt-4 contact-section">
      <h2>Contact</h2>
      <p>If you'd like to get in touch, please use the contact form below:</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Attach Documents (PDF, DOCX, etc.):</label>
          <input type="file" className="form-control" id="file" name="file" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      {notification && <div className="mt-3">{notification}</div>}
    </section>
  );
}

export default Contact;
