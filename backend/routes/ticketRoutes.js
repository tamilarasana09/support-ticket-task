const express = require('express');
const router = express.Router();
const { createTicket } = require('../controllers/ticketController');
const { validateCreateTicket } = require('../helpers/ticketsValidator');

router.post('/',validateCreateTicket, createTicket);


module.exports = router;
