const express = require('express');
const app = express();

// A simple GET endpoint
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// A simple POST endpoint
app.post('/api/data', (req, res) => {
  res.json({ message: 'Data received' });
});

// Export the app for testing
module.exports = app;
