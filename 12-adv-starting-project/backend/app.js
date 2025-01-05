const bodyParser = require('body-parser');
const express = require('express');

const eventRoutes = require('./routes/events');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(8080);

// const bodyParser = require('body-parser');
// const express = require('express');
// const cors = require('cors'); // Import the cors middleware

// const eventRoutes = require('./routes/events');

// const app = express();

// // Use bodyParser to parse JSON requests
// app.use(bodyParser.json());

// // CORS Middleware (using cors library for simplicity)
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // Replace with your frontend's origin
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   })
// );

// // Routes
// app.use('/events', eventRoutes);

// // Error handling middleware
// app.use((error, req, res, next) => {
//   const status = error.status || 500;
//   const message = error.message || 'Something went wrong.';
//   res.status(status).json({ message: message });
// });

// // Start the server
// app.listen(8080, () => {
//   console.log('Server is running on http://localhost:8080');
// });

