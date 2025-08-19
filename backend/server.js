require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tickets', ticketRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
