var RouterProjects = Backbone.Router.extend({
  routes: {
    projects: "showProjects",
  },

  showProjects: function () {
    var fade = $.Deferred();

    //Set all the defaults to the model
    projectsViewPage.model.clear().set(projectsViewPage.model.defaults);

    projectsViewPage.getProjData().done(function () {
      $("#content").fadeOut(function () {
        fade.resolve();
        $("#content").html(projectsViewPage.render().el);
      });
    });
  },
});

var projectsViewPage = null;
var projectsModelPage = null;
var projectsRouter = null;

projectsModelPage = new ModelProjects();
projectsViewPage = new ViewProjects({
  model: projectsModelPage,
  tagName: "div",
});

projectsRouter = new RouterProjects();
