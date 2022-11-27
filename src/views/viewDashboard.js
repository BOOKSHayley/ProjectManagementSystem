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
      console.log(a);
      promise.resolve();
    });

    return promise.promise();
  },

  render: function () {
    var self = this;

    this.$el.html(Handlebars.templates.dashboard(this.model.toJSON()));

    //Can add functions to be run on rendering can go here

    patchDatabase("users/VO1", {
      userID: 6,
      name: "Vaughn Ohlerking",
      initials: "VO",
    });

    $.when(fade).done(function () {
      $("#content").fadeIn();
    });

    this.delegateEvents();
    return this;
  },
});
