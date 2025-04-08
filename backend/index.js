// Import the express module
import express from 'express';

// Create an instance of express
const app = express();

// Define a port to listen on
const port = 3000;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
