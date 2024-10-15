
const express = require('express');
const router = express.Router();
const Financa = require('../models/Financa');

// Obter todas as finanças
router.get('/', async (req, res) => {
    try {
        const financas = await Financa.findAll();
        res.json(financas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicionar uma nova finança
router.post('/', async (req, res) => {
    try {
        const financa = await Financa.create(req.body);
        res.status(201).json(financa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
