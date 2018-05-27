const mongoose = require('mongoose');

module.exports = async function() {
  await global.__MONGODB__.stop();
};
