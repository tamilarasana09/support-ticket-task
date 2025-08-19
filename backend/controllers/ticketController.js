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

// Get All Tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await ticketModel.getAllTickets();
    return res.status(200).json({
      success: true,
      data: tickets
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update Ticket Status
const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const ticket = await ticketModel.updateTicketStatus(id, status);
    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Ticket updated successfully',
      data: ticket
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createTicket, getTickets, updateTicket };
