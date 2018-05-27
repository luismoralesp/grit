module.exports = {
  testEnvironment: 'node',
  verbose: true,
  //setupTestFrameworkScriptFile: './setupTests.js',
  testMatch: ['**/test/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['<rootDir>/(lib|build|docs|node_modules)/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/(node_modules|server/db/(migrations|seeds))/',
    '<rootDir>/server/index.js',
    '<rootDir>/knexfile.js'
  ],
  collectCoverage: true,
  coverageReporters: ['lcov']
};
