
const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

// Obter todos os pedidos
router.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicionar um novo pedido
router.post('/', async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
