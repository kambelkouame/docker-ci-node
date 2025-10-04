const request = require('supertest');
const app = require('../index');

let server;

beforeAll(() => {
  server = app.listen(3000); // démarre le serveur pour les tests
});

afterAll((done) => {
  server.close(done); // ferme le serveur après les tests
});

describe('Test endpoint /', () => {
  it('should return 200 and the hello message', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Docker + CI/CD!');
  });
});