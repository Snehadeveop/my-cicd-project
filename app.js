// Import the Express module
const express = require('express');

// Initialize the Express application
const app = express();

// Define a port for the server
const PORT = 3000;

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
