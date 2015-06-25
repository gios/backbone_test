$(function() {
  var listsView = Backbone.View.extend({
    el: $("#listRender"),

    initialize: function() {
      _.bindAll(this, 'render');
      this.collection = new listCollection();
      this.collection.add(mike);
      this.collection.add(jack);
      this.collection.add(russel);
      var products = this.collection.toJSON();
      var dataSource = new kendo.data.DataSource({
        data: products,
        pageSize: 2
      });
      dataSource.read();
      this.render(dataSource);
    },

    render: function(dataSource) {
      console.log(dataSource);

      this.$el.kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#listItem").html())
      });

      $("#pager").kendoPager({
        dataSource: dataSource
      });
    }
  });

  new listsView();
});
