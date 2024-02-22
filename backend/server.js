// server.js
const express = require('express');
const multer = require('multer');
const db = require('./data/db'); // Import the connection pool from db.js

const app = express();
const port = 5000;

// Set NODE_ENV to 'development' if not already set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define route for handling form submissions
app.post('/submit', upload.single('file'), async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const filePath = req.file ? req.file.path : null;

    // Use the connection pool to execute the query
    await db.executeQuery('INSERT INTO contact_form (name, email, message, file_path) VALUES (?, ?, ?, ?)', [name, email, message, filePath]);

    res.status(200).send('Message sent successfully and data saved in the database.');
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).send('An error occurred. Please try again later.');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('An error occurred:', err);
  res.status(500).send('Something went wrong on the server.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
