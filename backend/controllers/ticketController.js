const ticketModel = require('../models/ticketModel');

// Create Ticket
const createTicket = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    const ticket = await ticketModel.createTicket(title, description, priority);
    return res.status(201).json({
      success: true,
      message: 'Ticket created successfully',
      data: ticket
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createTicket };