// setup.js
const InMemoryMongoServer = require('mongodb-memory-server');

const MONGO_DB_NAME = 'TEST_DATABASE';
const mongoServer = new InMemoryMongoServer.default();

module.exports = function() {
  global.__MONGODB__ = mongoServer;
  global.__MONGO_DB_NAME__ = MONGO_DB_NAME;
};
