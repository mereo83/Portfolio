const express = require('express');
const router = express.Router();
const db = require('../data/db'); // Path to your 'db.js' file

// Define a route for handling contact form submissions
router.post('/submit', async (req, res) => {
  try {
    // Access form data
    const { name, email, message } = req.body;

    // Save the form data to the database
    await saveFormDataToDatabase(name, email, message);

    // Send a success response
    res.status(200).send('Message sent successfully and data saved in the database.');
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('An error occurred. Please try again later.');
  }
});

// Define a function to save form data to the database
async function saveFormDataToDatabase(name, email, message) {
  try {
    // Define your SQL query to insert data into the contact_table
    const query = 'INSERT INTO contact_table (id, name, email, message, file) VALUES (?, ?, ?, ?, ?)';

    // Execute the SQL query with the form data
    await db.executeQuery(query, [null, name, email, message, null]);

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
