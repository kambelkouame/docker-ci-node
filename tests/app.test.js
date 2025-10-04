const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return 200 and the hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello Docker + CI/CD!');
  });
});
