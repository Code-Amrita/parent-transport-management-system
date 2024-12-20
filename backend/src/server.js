const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('should respond to health check', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
  });
});