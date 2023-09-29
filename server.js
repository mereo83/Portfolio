const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

// Use cookies
app.use(cookieParser());

// Set up sessions
app.use(
  session({
    secret: 'your-secret-key', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
  })
);

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Body parser middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import the contact route
const contactRoute = require('./routes/contact'); // Use ./routes/contact

// Mount the contact route at /contact
app.use('/contact', contactRoute);

// Your other routes and middleware here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
