var listCollection = Backbone.Collection.extend({
  url: '/items',

  model: listModel
});
