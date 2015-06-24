$(function() {
  var listsView = Backbone.View.extend({
    el: $("#listRender"),

    initialize: function() {
      this.collection = new listCollection();
      this.collection.bind("add", this.renderListItem());
      this.collection.add(mike);
      this.collection.add(jack);
      this.collection.add(russel);
      this.render();
    },

    render: function() {
      var self = this;
      _(this.collection.models).each(function(item) {
        self.renderListItem(item);
      });
    },

    renderListItem: function(item) {
      this.$el.append(new listView({model: item}).render().el);
    }
  });

  new listsView();
});
