const { Router } = require('express');
const AlienModel = require('../models/AlienModel.js');

module.exports = Router().get('/', async (req, res) => {
  const allAliens = await AlienModel.getAllAliens();
  const filtered = allAliens.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
