const express = require('express');
const router = express.Router();
const itemsController = require('./controllers/itemController');

router.get('/', itemsController.listarItens);

module.exports = router;