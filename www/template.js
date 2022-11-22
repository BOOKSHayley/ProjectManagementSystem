this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["dashboard"] = Handlebars.template({
  1: function (container, depth0, helpers, partials, data) {
    var stack1,
      helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

    return (
      '                <div class="dash-card-holder">\r\n                    <a href="#project/' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, "projectID") ||
            (depth0 != null ? lookupProperty(depth0, "projectID") : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: "projectID",
              hash: {},
              data: data,
              loc: {
                start: { line: 36, column: 38 },
                end: { line: 36, column: 51 },
              },
            })
          : helper)
      ) +
      '" class="dash-card project-card">\r\n                        <h5>' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, "projectName") ||
            (depth0 != null
              ? lookupProperty(depth0, "projectName")
              : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: "projectName",
              hash: {},
              data: data,
              loc: {
                start: { line: 37, column: 28 },
                end: { line: 37, column: 43 },
              },
            })
          : helper)
      ) +
      "</h5>\r\n" +
      ((stack1 = (
        lookupProperty(helpers, "ifvalue") ||
        (depth0 && lookupProperty(depth0, "ifvalue")) ||
        alias2
      ).call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "starred") : depth0,
        {
          name: "ifvalue",
          hash: { equals: 1 },
          fn: container.program(2, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 38, column: 24 },
            end: { line: 42, column: 36 },
          },
        }
      )) != null
        ? stack1
        : "") +
      '                        <p class="col-12 description">' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, "description") ||
            (depth0 != null
              ? lookupProperty(depth0, "description")
              : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: "description",
              hash: {},
              data: data,
              loc: {
                start: { line: 43, column: 54 },
                end: { line: 43, column: 69 },
              },
            })
          : helper)
      ) +
      '</p>\r\n                        <p class="col-12">Time Spent: ' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, "timeSpent") ||
            (depth0 != null ? lookupProperty(depth0, "timeSpent") : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: "timeSpent",
              hash: {},
              data: data,
              loc: {
                start: { line: 44, column: 54 },
                end: { line: 44, column: 67 },
              },
            })
          : helper)
      ) +
      " hours</p>\r\n                    </a>\r\n                </div>\r\n"
    );
  },
  2: function (container, depth0, helpers, partials, data) {
    return '                            <span class="material-icons favorite">\r\n                            star\r\n                            </span>\r\n';
  },
  compiler: [8, ">= 4.3.0"],
  main: function (container, depth0, helpers, partials, data) {
    var stack1,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

    return (
      ((stack1 = container.invokePartial(
        lookupProperty(partials, "nav"),
        depth0,
        {
          name: "nav",
          data: data,
          helpers: helpers,
          partials: partials,
          decorators: container.decorators,
        }
      )) != null
        ? stack1
        : "") +
      '<div class="page-content-wrapper">\r\n    <div class="container-fluid">\r\n        <h2 class="dash-header">Dashboard</h2>\r\n\r\n        <div class="dash-container">\r\n            <div class="dash-card-holder">\r\n\r\n                <a href="#projects" class="dash-card">\r\n                    <h5>Projects</h5>\r\n                </a>\r\n                \r\n            </div>\r\n\r\n            <div class="dash-card-holder">\r\n\r\n                <a href="#calendar" class="dash-card">\r\n                    <h5>Calendar</h5>\r\n                </a>\r\n            </div>\r\n\r\n            <div class="dash-card-holder">\r\n                <a href="#personalBoard" class="dash-card">\r\n                    <h5>Personal Board</h5>\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <h2 class="dash-header">Projects</h2>\r\n\r\n        <div class="dash-container">\r\n\r\n' +
      ((stack1 = lookupProperty(helpers, "each").call(
        depth0 != null ? depth0 : container.nullContext || {},
        depth0 != null ? lookupProperty(depth0, "starredProjects") : depth0,
        {
          name: "each",
          hash: {},
          fn: container.program(1, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 34, column: 12 },
            end: { line: 47, column: 21 },
          },
        }
      )) != null
        ? stack1
        : "") +
      "\r\n    </div>\r\n</div>"
    );
  },
  usePartial: true,
  useData: true,
});
this["Handlebars"]["templates"]["example"] = Handlebars.template({
  1: function (container, depth0, helpers, partials, data) {
    return "            <p>Counter is 1!</p>\r\n";
  },
  compiler: [8, ">= 4.3.0"],
  main: function (container, depth0, helpers, partials, data) {
    var stack1,
      helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

    return (
      ((stack1 = container.invokePartial(
        lookupProperty(partials, "sidenav"),
        depth0,
        {
          name: "sidenav",
          data: data,
          helpers: helpers,
          partials: partials,
          decorators: container.decorators,
        }
      )) != null
        ? stack1
        : "") +
      '<div class="page-content-wrapper">\r\n    <div class="container-fluid">\r\n        <button type="button" class="btn btn-primary m-2" id="clickButton">Click!</button>\r\n\r\n        <!-- The curly brackets indicates Handlebars being used. There is a variable in the model called counter that is being referenced here -->\r\n        <p id="counter">Counter: ' +
      container.escapeExpression(
        ((helper =
          (helper =
            lookupProperty(helpers, "counter") ||
            (depth0 != null ? lookupProperty(depth0, "counter") : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === "function"
          ? helper.call(alias1, {
              name: "counter",
              hash: {},
              data: data,
              loc: {
                start: { line: 7, column: 33 },
                end: { line: 7, column: 44 },
              },
            })
          : helper)
      ) +
      "</p> \r\n\r\n\r\n        <!-- Example of using a handlebarHelper -->\r\n" +
      ((stack1 = (
        lookupProperty(helpers, "ifvalue") ||
        (depth0 && lookupProperty(depth0, "ifvalue")) ||
        alias2
      ).call(alias1, 1, {
        name: "ifvalue",
        hash: {
          equals: depth0 != null ? lookupProperty(depth0, "counter") : depth0,
        },
        fn: container.program(1, data, 0),
        inverse: container.noop,
        data: data,
        loc: { start: { line: 11, column: 8 }, end: { line: 13, column: 20 } },
      })) != null
        ? stack1
        : "") +
      "    </div>\r\n</div>"
    );
  },
  usePartial: true,
  useData: true,
});
this["Handlebars"]["templates"]["Kanban"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function (container, depth0, helpers, partials, data) {
    var stack1,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

    return (
      ((stack1 = container.invokePartial(
        lookupProperty(partials, "nav"),
        depth0,
        {
          name: "nav",
          data: data,
          helpers: helpers,
          partials: partials,
          decorators: container.decorators,
        }
      )) != null
        ? stack1
        : "") +
      '<div class="page-content-wrapper-fluid">\r\n    <div class="container-fluid">\r\n        <h2 class="dash-header">Kanban Board</h2>\r\n        <div class="container-fluid">\r\n            <div class=\r\n                "p-2 mb-2 \r\n                border border-dark border-4 rounded-3">\r\n                <div style="display:flex">\r\n                    <div class="col-3 p-1">\r\n                        <h4 class="dash-header">Not Started</h4>\r\n                        <div class=\r\n                            "p-2 mb-2 \r\n                            border border-secondary border-3 rounded-2" style="h-100">\r\n\r\n\r\n                            \r\n\r\n                            <div class = "p-1">\r\n                                <div class="card bg-secondary text-white">\r\n                                    <a href="#task5" class="card-body">\r\n                                        <h6 class="card-title">Task 5</h6>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class = "p-1">\r\n                                <div class="card bg-secondary text-white">\r\n                                    <a href="#task6" class="card-body">\r\n                                        <h6 class="card-title">Task 6</h6>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="col-3 p-1">\r\n                        <h4 class="dash-header">In Progress</h4>\r\n                        <div class=\r\n                            "p-2 mb-2 \r\n                            border border-secondary border-3 rounded-2">\r\n                            <div class = "p-1">\r\n                                <div class="card bg-secondary text-white">\r\n                                    <a href="#task3" class="card-body">\r\n                                        <h6 class="card-title">Task 3</h6>\r\n                                        <p class="card-text">6 hr.</p>\r\n                                        <div class="progress" style="height: 15px;">\r\n                                            <div class="progress-bar progress-bar-striped" style ="width:50%">25%</div>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class = "p-1">\r\n                                <div class="card bg-secondary text-white">\r\n                                    <a href="#task4" class="card-body">\r\n                                        <h6 class="card-title">Task 4</h6>\r\n                                        <p class="card-text">2 hr.</p>\r\n                                        <div class="progress" style="height: 15px;">\r\n                                            <div class="progress-bar progress-bar-striped" style="width:20%">25%</div>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="col-3 p-1">\r\n                        <h4 class="dash-header">Testing</h4>\r\n                        <div class=\r\n                            "p-2 mb-2 \r\n                            border border-secondary border-3 rounded-2">\r\n                            <div class = "p-1">\r\n                                <div class="card bg-secondary text-white">\r\n                                    <a href="#task2" class="card-body">\r\n                                        <h6 class="card-title">Task 2</h6>\r\n                                        <p class="card-text">3 hr.</p>\r\n                                        <div class="progress" style="height: 15px;">\r\n                                            <div class="progress-bar progress-bar-striped" style="width:90%">25%</div>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="col-3 p-1">\r\n                        <h4 class="dash-header">Done!</h4>\r\n                        <div class=\r\n                            "p-2 mb-2 \r\n                            border border-secondary border-3 rounded-2">\r\n                            <div class = "p-1">\r\n                                <div class="card bg-secondary text-white">\r\n                                    <a href="#task1" class="card-body">\r\n                                        <h6 class="card-title">Task 1</h6>\r\n                                        <p class="card-text">20 hr.</p>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
    );
  },
  usePartial: true,
  useData: true,
});
this["Handlebars"]["templates"]["login"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function (container, depth0, helpers, partials, data) {
    return '\r\n<div class="page-content-wrapper">\r\n    <div class="container-fluid p-0">\r\n        \r\n        <div id="main-contain">\r\n\r\n            <div class="col-10 col-md-6 login-box py-4">\r\n\r\n                <img class="login-logo" src="../img/PiM.png">\r\n                <h2>Login</h2>\r\n\r\n                <div class="input-group m-2">\r\n                    <div class="input-group-prepend">\r\n                        <span class="input-group-text" id="inputGroup-sizing-default">\r\n                            <span class="material-icons">\r\n                                mail\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input type="text" class="form-control login-input" \r\n                    aria-label="Default" aria-describedby="inputGroup-sizing-default"\r\n                    placeholder="Enter your email" id="loginEmail">\r\n                </div>\r\n\r\n                <div class="input-group m-2">\r\n                    <div class="input-group-prepend">\r\n                        <span class="input-group-text" id="inputGroup-sizing-default">\r\n                            <span class="material-icons">\r\n                                key\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input class="form-control login-input" aria-label="Default" \r\n                    aria-describedby="inputGroup-sizing-default"\r\n                    placeholder="Enter password" id="loginPw" type="password">\r\n                </div>\r\n\r\n                <button class="btn btn-primary try-login m-2">Login</button>\r\n                <a class="register-link" href="#register">New to PiM?</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>';
  },
  useData: true,
});
this["Handlebars"]["templates"]["taskPage"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function (container, depth0, helpers, partials, data) {
    var stack1,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

    return (
      ((stack1 = container.invokePartial(
        lookupProperty(partials, "nav"),
        depth0,
        {
          name: "nav",
          data: data,
          helpers: helpers,
          partials: partials,
          decorators: container.decorators,
        }
      )) != null
        ? stack1
        : "") +
      '<div class="page-content-wrapper">\r\n    <div class="container-fluid">            \r\n        \r\n        <div class="row">\r\n            <div class="col-6">\r\n                <div style="display: flex; align-items: center;">\r\n                    <h1>Task 1</h1>\r\n                    <h5 class="px-2"><span class="badge bg-warning">Inprogress</span></h5>\r\n                </div>\r\n\r\n                <div style="display: flex; align-items: center">\r\n                    <h5 style="margin-right: 5px">Progress:</h5>\r\n                    <div class="progress" style="width:100%">\r\n                        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 88%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">88%</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class="card" style="width: 100%; overflow-y:scroll; max-height: 200px">\r\n                    <div class="card-body">\r\n                        <h5 class="card-title">Description</h5>\r\n                        <p class="card-text">Description of task 1 in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n\r\n                <div>\r\n                    <div style="display: flex;">\r\n                        <h4>Assigned Users:</h4>\r\n                        <button type="button" class="btn"><span class="material-icons-outlined">add_circle_outline</span></button>\r\n                    </div>\r\n                    <ul style="float: none !important">\r\n                        <li>User 1</li>\r\n                        <li>User 2</li>\r\n                    </ul>\r\n                </div>\r\n               \r\n                <br>\r\n                <div>\r\n                    <h4>Time Logged on Task:</h4>\r\n                    <p>21 Hours 23 Minutes</p>\r\n                    <h4>Projected finish date:</h4>\r\n                    <p>12-2-2020</p>\r\n                </div>\r\n\r\n            </div>\r\n            <div class="col-6">\r\n            </div>\r\n        </div>    \r\n    </div>\r\n</div>'
    );
  },
  usePartial: true,
  useData: true,
});
