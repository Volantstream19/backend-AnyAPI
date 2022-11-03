const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { aliens } = require('../lib/alien-data');

describe('alien routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/aliens should return a list of aliens', async () => {
    const res = await request(app).get('/aliens');
    const expected = aliens.map((alien) => {
      return { id: alien.id, name: alien.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/aliens/:id should return alien detail', async () => {
    const res = await request(app).get('/aliens/1');
    const felixoid = {
      id: '1',
      name: 'Felixoid',
      type: 'Tuxedo',
      year: 1892,
    };

    expect(res.body).toEqual(felixoid);
  });

  afterAll(() => {
    pool.end();
  });
});
