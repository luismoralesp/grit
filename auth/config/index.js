require('dotenv').config();
const InMemoryMongo = require('mongodb-memory-server');
const path = require('path');
const ENV = process.env.NODE_ENV || 'development';

const config = {
  env: ENV,
  databaseURL: getDatabaseURL()
};

module.exports = config;

function getDatabaseURL() {
  if (process.env.NODE_ENV === 'test') {
    const mongo = new InMemoryMongo();
    return mongo.getConnectionString();
  }
  return process.env.DATABASE_URL;
}
