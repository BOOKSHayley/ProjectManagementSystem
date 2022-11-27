var RouterDashboard = Backbone.Router.extend({
  routes: {
    // These are urls that will trigger this dashboard page to appear
    dashboard: "showDashboard",
  },

  showDashboard: function () {
    var fade = $.Deferred();

    // console.log("here");

    //Set all the defaults to the model
    dashboardViewPage.model.clear().set(dashboardViewPage.model.defaults);

    dashboardViewPage.getData().done(function () {
      $("#content").fadeOut(function () {
        fade.resolve();
        $("#content").html(dashboardViewPage.render().el);
      });
    });
  },
});

var dashboardViewPage = null;
var dashboardModelPage = null;
var dashboardRouter = null;

dashboardModelPage = new ModelDashboard();
dashboardViewPage = new ViewDashboard({
  model: dashboardModelPage,
  tagName: "div",
});

dashboardRouter = new RouterDashboard();
