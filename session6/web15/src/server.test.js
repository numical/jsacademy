const assert = require('assert');
const request = require('supertest');
const app  = require('./server.js');

describe('server', () => {

  it('inbox endpoint returns OK', async() => {
    const response = await request(app).get('/inbox');
    assert(200, response.statusCode);
  });

  it('inbox endpoint returns an array ofmails', async() => {
    const response = await request(app).get('/inbox');
    assert(Array.isArray(response.body));
  });

  it('inbox endpoint returns 3 mails', async() => {
    const response = await request(app).get('/inbox');
    assert.equal(response.body.length, 3);
  });

  it('root endpoint returns an html document', async() => {
    const response = await request(app).get('/index.html');
    assert(200, response.statusCode, 'error status returned');
    assert(response.text.startsWith('<!DOCTYPE html>', 'does not start with doctype'));
  })

});
