$(function() {
  var listsView = Backbone.View.extend({
    el: $("#listRender"),

    initialize: function() {
      _.bindAll(this, 'render');
      this.collection = new listCollection();
      this.collection.fetch();
      this.collection.on('add', function(e) {
        this.getData();
      }, this);
    },

    getData: function() {
      var products = this.collection.toJSON();
      var dataSource = new kendo.data.DataSource({
        data: products,
        pageSize: 21
      });
      dataSource.read();
      this.render(dataSource);
    },

    addItem: function(e) {
      var nameValue = $("#nameField")[0].value;
      var ageValue = $("#ageField")[0].value;
      var salaryValue = $("#salaryField")[0].value;
      this.collection.add({
        name: nameValue,
        age: ageValue,
        salary: salaryValue
      });
    },

    render: function(dataSource) {
      var self = this;

      var inputFieldlistTemplate = _.template($("#inputFieldlistTemplate").html(), {});
      $("#addItemRender").html(inputFieldlistTemplate);

      $("#ageField").kendoNumericTextBox({
        min: 1,
        max: 150
      });
      $("#salaryField").kendoNumericTextBox({
        min: 1,
        max: 1000000,
        step: 100
      });

      var validator = $("#inputFieldlistForm").kendoValidator().data("kendoValidator"),
        status = $(".status");

      $("#inputFieldlistForm").submit(function(event) {
        event.preventDefault();
        if (validator.validate()) {
          status.text("Added to list!")
            .removeClass("invalid")
            .addClass("valid");
          self.addItem(event);
        } else {
          status.text("Oops! Some errors!")
            .removeClass("valid")
            .addClass("invalid");
        }
        return false;
      });

      this.$el.kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#listItemTemplate").html())
      });

      $("#pager").kendoPager({
        dataSource: dataSource
      });
    }
  });

  new listsView();
});
