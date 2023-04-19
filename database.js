// Database connection
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

const pool = new Pool(config);

// Connect to database
pool.connect((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('SUCCESS Connected to database.');
    }
});

module.exports = {
    pool,
};