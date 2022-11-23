var ViewDashboard = Backbone.View.extend({
  events: {
    //Events include: click, keyup, change, etc
    "click #clickButton": "clickButtonFunction",
    "click #taskModalOpen": "taskModalOpen",
  },

  initialize: function () {},

  getData: function () {
    var self = this;
    var promise = $.Deferred();

    const res = fetchData("projects");
    res.then((e) => {
      const a = Object.values(e);
      self.model.set("starredProjects", a);
      // this.$el.append("<h1>" + a.name + "</h1>");
      console.log(a);
      promise.resolve();
    });
    // .done(function () {

    // });

    return promise.promise();
  },

  render: function () {
    var self = this;

    this.$el.html(Handlebars.templates.dashboard(this.model.toJSON()));

    //Can add functions to be run on rendering can go here
    // const res = fetchData("projects");
    // res.then((e) => {
    //   const a = Object.values(e)[0];
    //   this.$el.html("<h1>" + a.name + "</h1>");
    //   console.log(a);
    // }).then((a) => {set})
    // patchDatabase("projects", {
    //   BSProj: {
    //     projectID: 9999,
    //     name: "BS Project",
    //     starred: 0,
    //     description: "Project for testing purposes",
    //     groups: [21943],
    //   },
    // });

    $.when(fade).done(function () {
      $("#content").fadeIn();
    });

    this.delegateEvents();
    return this;
  },
});
