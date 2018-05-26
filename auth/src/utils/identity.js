const FlakeId = require('flake-idgen');
const formatter = require('biguint-format');
const idGenerator = new FlakeId();

function nextId() {
  return formatter(idGenerator.next(), 'dec');
}

module.exports.nextId = nextId;
