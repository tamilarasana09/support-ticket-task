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

module.exports = {
  createTicket
};
