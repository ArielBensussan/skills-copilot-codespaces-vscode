// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
    res.send('GET request to the homepage');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
