const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 5000; // You can change the port if needed

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Blessme@12',
  database: 'school_management',
});

app.use(express.json());

app.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const connection = await pool.getConnection();
    await connection.query('INSERT INTO contact_table (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
    connection.release();

    res.status(200).send('Message sent successfully and data saved in the database.');
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).send('An error occurred. Please try again later.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
