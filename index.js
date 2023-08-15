// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

app.use(express.json());
app.use(bodyParser.json());

// Import the router object from the route file
const route= require('./src/routes/index');

// Define a route to handle GET requests
app.use('/', route);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
