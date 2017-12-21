const express = require('express');
const router = express.Router();

const AreaConstroller = require('../../controllers/area.controller');

router.get('/', AreaConstroller.getAreas);

module.exports = router;
