
const express = require('express');
const router = express.Router();
const PlanejamentoProducao = require('../models/PlanejamentoProducao');

// Obter todos os planejamentos de produção
router.get('/', async (req, res) => {
    try {
        const planejamentos = await PlanejamentoProducao.findAll();
        res.json(planejamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicionar um novo planejamento de produção
router.post('/', async (req, res) => {
    try {
        const planejamento = await PlanejamentoProducao.create(req.body);
        res.status(201).json(planejamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
