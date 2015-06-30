var ratingCollection = Backbone.Collection.extend({
  url: '/rating',

  model: ratingModel
});
