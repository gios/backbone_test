$(function() {
  var ratingView = Backbone.View.extend({
    el: $("#listRender"),

    initialize: function() {
      _.bindAll(this, 'render');
      var self = this;
      this.collection = new ratingCollection();
      this.collection.fetch();
      console.log(this.collection);
    },

    getData: function(data) {
      var products = data.toJSON();
      var dataSource = new kendo.data.DataSource({
        data: products,
        pageSize: 24
      });
      dataSource.read();
      this.render(dataSource);
    },

    render: function(dataSource) {

    }
  });

  new ratingView();
});
