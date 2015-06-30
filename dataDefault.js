var Chance = require('chance');

var chance = new Chance();

function generatorDataList(from, to) {
  var dataTmp = [];
  var objectTmp = {};
  for (var i = from; i < to; i++) {
    objectTmp.name = chance.first().toLowerCase();
    objectTmp.age = chance.age();
    objectTmp.salary = chance.integer({min: 1000, max: 10000});
    dataTmp.push(objectTmp);
    objectTmp = {};
  }
  return dataTmp;
}

function generatorDataRating(from, to) {
  var dataTmp = [];
  var objectTmp = {};
  for (var i = from; i < to; i++) {
    objectTmp.name = chance.country({ full: true }).toLowerCase();
    objectTmp.rating = chance.integer({min: 1, max: 5});
    objectTmp.revenue = chance.integer({min: 1000, max: 10000});
    dataTmp.push(objectTmp);
    objectTmp = {};
  }
  return dataTmp;
}

module.exports.dataList = generatorDataList;
module.exports.dataRating = generatorDataRating;
