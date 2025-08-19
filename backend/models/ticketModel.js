const pool = require('../config/db');

// Create Ticket
async function createTicket(title, description, priority) {
  const result = await pool.query(
    `INSERT INTO tickets (title, description, priority)
     VALUES ($1, $2, $3) RETURNING *`,
    [title, description, priority]
  );
  return result.rows[0];
}

// Get All Tickets
async function getAllTickets() {
  const result = await pool.query('SELECT * FROM tickets ORDER BY created_at DESC');
  return result.rows;
}

// Update Ticket Status
async function updateTicketStatus(id, status) {
  const result = await pool.query(
    `UPDATE tickets SET status=$1 WHERE id=$2 RETURNING *`,
    [status, id]
  );
  return result.rows[0];
}

module.exports = {
  createTicket,
  getAllTickets,
  updateTicketStatus
};
