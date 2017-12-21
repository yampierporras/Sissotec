const express = require('express');
const router = express.Router();

const TicketController = require('../../controllers/ticket.controller');

router.get('/', TicketController.getTickets);
router.post('/', TicketController.createTicket);

module.exports = router;
