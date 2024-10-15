
const express = require('express');
const router = express.Router();
const Insumo = require('../models/Insumo');

// Obter todos os insumos
router.get('/', async (req, res) => {
    try {
        const insumos = await Insumo.findAll();
        res.json(insumos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicionar um novo insumo
router.post('/', async (req, res) => {
    try {
        const insumo = await Insumo.create(req.body);
        res.status(201).json(insumo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
