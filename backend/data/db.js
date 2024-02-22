// data/db.js

const mysql = require('mysql2/promise');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Blessme@12',
  database: 'school_management', 
});

// Function to execute SQL queries
async function executeQuery(query, params) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(query, params);
    return results;
  } finally {
    connection.release();
  }
}

// Test the database connection
pool
  .getConnection()
  .then((connection) => {
    console.log('Connected to MySQL database');
    connection.release();
  })
  .catch((err) => {
    console.error('Error connecting to MySQL database:', err);
  });

module.exports = {
  executeQuery,
};
