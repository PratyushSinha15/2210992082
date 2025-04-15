const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { port } = require('./config/config');

const app = express();

// Use the defined routes
app.use('/evaluation-service', userRoutes);
app.use('/evaluation-service', postRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
