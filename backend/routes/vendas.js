
const express = require('express');
const router = express.Router();
const Venda = require('../models/Venda');

// Obter todas as vendas
router.get('/', async (req, res) => {
    try {
        const vendas = await Venda.findAll();
        res.json(vendas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicionar uma nova venda
router.post('/', async (req, res) => {
    try {
        const venda = await Venda.create(req.body);
        res.status(201).json(venda);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
