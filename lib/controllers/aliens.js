const { Router } = require('express');
const AlienModel = require('../models/AlienModel.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const allAliens = await AlienModel.getAllAliens();
    const filtered = allAliens.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  })

  .get('/:id', async (req, res) => {
    const singleAlien = await AlienModel.getAlienById(req.params.id);
    res.json(singleAlien);
  });
