$(function() {
  var listsView = Backbone.View.extend({
    el: $("#listRender"),

    initialize: function() {
      _.bindAll(this, 'render');
      var self = this;
      this.collection = new listCollection();
      this.searchCollection = new searchCollection();
      this.collection.fetch({
        success: function() {
          self.getData(self.collection);
          self.collection.on('add', function(e) {
            self.getData(self.collection);
          });
        },
        error: function() {
          console.error("Fetch error");
        }
      });
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

    searchItem: function(value) {
      var self = this;
      var searchResult = this.collection.where({name: value.toLowerCase()});
      this.searchCollection.add(searchResult);
      this.getData(this.searchCollection);
      $("#backToAllRender").click(function() {
        self.getData(self.collection);
        self.searchCollection.reset();
      });
    },

    render: function(dataSource) {
      var self = this;

      var backToAllTemplate = _.template($("#backToAllTemplate").html(), {});
      $("#backToAllRender").html(backToAllTemplate);

      var searchListTemplate = _.template($("#searchListTemplate").html(), {});
      $("#addItemRender").html(searchListTemplate);

      var inputFieldlistTemplate = _.template($("#inputFieldlistTemplate").html(), {});
      $("#addItemRender").append(inputFieldlistTemplate);

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

      $("#searchButton").click(function(e) {
        self.searchItem($("#searchField").val());
      });

      $("#inputFieldlistForm").submit(function(event) {
        event.preventDefault();
        if (validator.validate()) {
          status.text("Added to list!")
            .removeClass("invalid")
            .addClass("valid");
          self.addItem();
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
