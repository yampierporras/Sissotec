const express = require('express');
const router = express.Router();

const AtencionTicketController = require('../../controllers/atencionTicket.controller');

router.get('/', AtencionTicketController.getAtencionesTicket);
router.get('/:idAtencionTicket', AtencionTicketController.readAtencionTicket);
router.get('/porArea/:nombreArea', AtencionTicketController.getAtencionesTicketPorArea);
router.post('/', AtencionTicketController.createAtencionTicket);
router.put('/', AtencionTicketController.updateAtencionTicket);

module.exports = router;
