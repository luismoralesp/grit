'use strict';

const Request = require('supertest');
const Application = require('../src/app');
const headers = require('');
const DATABASE_URL = global.__MONGO_URI__;

const app = new Application({ config: { databaseURI: DATABASE_URL } });

beforeAll(async () => {});

describe('Users tests', () => {
  describe('POST /users', () => {
    describe('should return a 401 status code', () => {
      it('when a unauthorized request is received', async () => {
        const res = await Request(app).get('/api/home');

        expect(res.status).toBe(401);
      });
    });
  });
});
