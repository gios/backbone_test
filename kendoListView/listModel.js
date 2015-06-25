var listModel = Backbone.Model.extend({
  defaults: {
    name: "Null",
    age: 0,
    salary: 0
  }
});

var mike = new listModel({name: "Mike", age: 18, salary: 2100});
var jack = new listModel({name: "Jack", age: 20, salary: 2700});
var russel = new listModel({name: "Russel", age: 22, salary: 2300});
