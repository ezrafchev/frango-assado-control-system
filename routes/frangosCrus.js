
const express = require('express');
const router = express.Router();
const FrangoCru = require('../models/FrangoCru');

// Obter todos os frangos crus
router.get('/', async (req, res) => {
  try {
    const frangos = await FrangoCru.findAll();
    res.json(frangos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Adicionar um novo frango cru
router.post('/', async (req, res) => {
  try {
    const frango = await FrangoCru.create(req.body);
    res.status(201).json(frango);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
