const express = require('express');
const multer = require('multer');
const router = express.Router();
const db = require('../data/db'); // Path to your 'db.js' file

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('application/pdf')) {
      cb(null, true);
    } else {
      cb(new Error('Only images and PDF files are allowed'));
    }
  }
});

// Define a route for handling contact form submissions
router.post('/submit', upload.single('file'), async (req, res) => {
  try {
    // Access form data
    const { name, email, message } = req.body;
    
    // Validate form data
    if (!name || !email || !message) {
      throw new Error('Name, email, and message are required fields');
    }
    
    // Access file path
    const filePath = req.file ? req.file.path : null;

    // Save the form data to the database
    await saveFormDataToDatabase(name, email, message, filePath);

    // Send a success response
    res.status(200).send('Message sent successfully and data saved in the database.');
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('An error occurred. Please try again later.');
  }
});

// Define a function to save form data to the database
async function saveFormDataToDatabase(name, email, message, filePath) {
  try {
    // Define your SQL query to insert data into the contact_form table
    const query = 'INSERT INTO contact_form (id, name, email, message, file_path) VALUES (?, ?, ?, ?, ?)';

    // Execute the SQL query with the form data
    await db.executeQuery(query, [null, name, email, message, filePath]);

    // Commit the transaction
    await db.commit();
  } catch (error) {
    // Handle any database errors here
    console.error('Database error:', error);
    
    // Rollback the transaction in case of an error
    await db.rollback();
    
    throw error;
  }
}

module.exports = router;
