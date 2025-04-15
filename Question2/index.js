const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { port: configPort } = require('./config/config');

const app = express();

// Use middleware to parse JSON, if needed
app.use(express.json());

// Mount routes
app.use('/evaluation-service', userRoutes);
app.use('/evaluation-service', postRoutes);

// Set port (default to 3000 if not provided in config)
const port = configPort || 3000;

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running at: http://localhost:${port}`);
});
