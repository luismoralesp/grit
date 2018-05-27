const InMemoryMongoServer = require('mongodb-memory-server').default;

module.exports = {
  globalSetup: '<rootDir>/test/setup.js',
  globalTeardown: '<rootDir>/test/teardown.js',
  testEnvironment: '<rootDir>/test/environment.js',
  verbose: true,
  //setupTestFrameworkScriptFile: './setupTests.js',
  testMatch: [
    '<rootDir>/test/**/*(*.)(spec|test).js?(x)',
    '**/?(*.)(spec|test).js?(x)'
  ],
  testPathIgnorePatterns: ['<rootDir>/(lib|build|docs|node_modules|config)/'],
  coveragePathIgnorePatterns: ['<rootDir>/(node_modules|config)/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['lcov']
};
