const pool = require('../utils/pool');

module.exports = class CowboyModel {
  constructor(row) {
    (this.id = row.id), (this.name = row.name), (this.type = row.type);
  }

  static async getAllCowboys() {
    const { rows } = await pool.query('SELECT * from cowboy_model');
    return rows.map((cowboyRow) => new CowboyModel(cowboyRow));
  }
};
