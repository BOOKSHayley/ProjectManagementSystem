var ModelDashboard = Backbone.Model.extend({
  defaults: {
    counter: 0,
    starredProjects: [
      {
        projectID: 1,
        projectName: "PiM",
        description:
          "PiM is the group project for CSC 4243 to create a project management system. Our goal is to create an intuitive software capable of competing with other project management systems.",
        timeSpent: 54,
        starred: 1,
      },
      {
        projectID: 2,
        projectName: "Operation Spark",
        description:
          "Op Spark is a software bootcamp to create a personal portfolio.",
        timeSpent: 32,
        starred: 1,
      },
      {
        projectID: 3,
        projectName: "Dispark",
        description:
          "An intuitive park management system for facility managers to track their parks.",
        timeSpent: 12,
        starred: 0,
      },
    ],
  },

  initialize: function () {},
});
