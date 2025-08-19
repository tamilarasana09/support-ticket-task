const express = require('express');
const router = express.Router();
const { createTicket, getTickets, updateTicket } = require('../controllers/ticketController');
const { validateCreateTicket, validateUpdateStatus } = require('../helpers/ticketsValidator');

router.post('/',validateCreateTicket, createTicket);
router.get('/', getTickets);
router.put('/:id', validateUpdateStatus, updateTicket);

module.exports = router;
