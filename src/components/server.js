// server.js

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();
const port = 3001; // or any port you prefer

app.use(bodyParser.json());

app.post('/api/testimonials', (req, res) => {
  const { name, comment, phone_number } = req.body;

  connection.query(
    'INSERT INTO testimonials (name, comment, phone_number) VALUES (?, ?, ?)',
    [name, comment, phone_number],
    (err, results) => {
      if (err) {
        console.error('Error inserting testimonial:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ success: true });
      }
    }
  );
});

// Add more endpoints for fetching testimonials, updating, and deleting

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
