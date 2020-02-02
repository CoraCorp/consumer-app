const express = require('express');
const addressesController = require('./controllers/address.controller');
const router = express.Router();

router.put('/user/:userId/address', addressesController.putAddress);

module.exports = router;
