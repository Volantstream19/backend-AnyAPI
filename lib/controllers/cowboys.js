const { Router } = require('express');
const CowboyModel = require('../models/CowboyModel.js');

module.exports = Router().get('/', async (req, res) => {
  const allCowboys = await CowboyModel.getAllCowboys();
  const filtered = allCowboys.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
