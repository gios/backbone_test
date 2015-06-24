var listView = Backbone.View.extend({

  tagName: "div",

  render: function() {
    var listItemTemplate = _.template($("#listItem").html());
    console.log(this.model);
    this.$el.html(listItemTemplate({
      name: "Mike",
      age: 21,
      salary: 1200
    }));
    return this;
  }
});
