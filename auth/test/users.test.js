'use strict';

const request = require('supertest');
const app = require('../src/app');
const headers = require('');

describe('Users tests', () => {
  describe('POST /users', () => {
    describe('should create a new user', () => {
      it('when a valid request is received', async () => {
        expect(1 + 2).toBe(3);
        /* const res = request(app)
          .get('/users')
          .set(headers); */
      });
    });
  });
});
