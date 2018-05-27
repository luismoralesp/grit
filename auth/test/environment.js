const NodeEnvironment = require('jest-environment-node');

class MongoEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    this.global.__MONGO_URI__ = await global.__MONGODB__.getConnectionString();
    this.global.__MONGO_DB_NAME__ = global.__MONGO_DB_NAME__;

    return await super.setup();
  }

  async teardown() {
    return await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = MongoEnvironment;
