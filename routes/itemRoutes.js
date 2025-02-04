const express = require('express');
const router = express.Router();
const musicaController = require('../controllers/itemController');

router.post('/musicas', musicaController.criarMusica);
router.get('/musicas', musicaController.listarMusicas);
router.get('/musicas/:id', musicaController.buscarMusicaPorId);
router.put('/musicas/:id', musicaController.atualizarMusica);
router.delete('/musicas/:id', musicaController.excluirMusica);

module.exports = router;
