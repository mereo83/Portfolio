// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-light p-4 text-center">
      <img src="assets/pic.jpg" alt="Derick Ngweamaw" className="profile-photo rounded-circle" />
      <h1>Derick Ngweamaw</h1>
      <p>Web Development Blog</p>
      <div className="container">
        <p>Welcome to my web development blog! I'm a results-oriented Full Stack Developer with a strong foundation in web development technologies and a passion for creating responsive and user-friendly web applications. I'm proficient in HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and MySQL. I'm eager to leverage my technical skills to contribute to innovative web projects and expand my knowledge in the field. Here, you'll find articles, tutorials, and my portfolio showcasing my journey in web development. Let's explore together.</p>
      </div>
    </header>
  );
}

export default Header;
