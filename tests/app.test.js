const request = require('supertest');
const app = require('../index'); // utilise l'app exportée

describe('Test endpoint /', () => {
  it('should return 200 and the hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Docker + CI/CD!');
  });
});