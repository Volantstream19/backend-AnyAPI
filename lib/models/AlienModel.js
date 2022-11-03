const pool = require('../utils/pool');
module.exports = class AlienModel {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.year = row.year;
  }

  static async getAllAliens() {
    const { rows } = await pool.query('SELECT * from alien_model');
    return rows.map((alienRow) => new AlienModel(alienRow));
  }

  static async getAlienById(id) {
    const { rows } = await pool.query(
      'SELECT * from alien_model WHERE id = $1',
      [id]
    );
    return new AlienModel(rows[0]);
  }
};
