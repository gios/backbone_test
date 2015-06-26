var Chance = require('chance');

var chance = new Chance();

function generatorData(from, to) {
  var dataTmp = [];
  var objectTmp = {};
  for (var i = from; i < to; i++) {
    objectTmp.name = chance.first();
    objectTmp.age = chance.age();
    objectTmp.salary = chance.integer({min: 1000, max: 10000});
    dataTmp.push(objectTmp);
    objectTmp = {};
  }
  return dataTmp;
}

module.exports = generatorData(0, 100);
