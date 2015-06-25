var listView = Backbone.View.extend({

  tagName: "div",

  render: function() {
    var listItemTemplate = _.template($("#listItem").html());
    this.$el.html(listItemTemplate(this.model.toJSON()));
    return this;
  }
});
