this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["createProject"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"groupID") || (depth0 != null ? lookupProperty(depth0,"groupID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupID","hash":{},"data":data,"loc":{"start":{"line":24,"column":47},"end":{"line":24,"column":58}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":24,"column":60},"end":{"line":24,"column":68}}}) : helper)))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"nav"),depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"page-content-wrapper\">\r\n        <div class=\"col-12 px-4\">\r\n            <h1 class=\"mt-4\">Create Project</h1> \r\n            <div class=\"form col-12 col-lg-6 col-md-4\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"projectName\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"projectName\" placeholder=\"Enter name...\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"projectDescription\">Description</label>\r\n                    <textarea class=\"form-control\" id=\"projectDescription\" rows=\"3\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Groups</label>\r\n                    <div class=\"input-group col-12 col-md-4 mx-0 px-0\">\r\n                        \r\n                        <select class=\"form-control\" name=\"groupSelect\" id=\"groupSelect\">\r\n                            <option selected disabled>Choose group...</option>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"groups") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":28},"end":{"line":25,"column":37}}})) != null ? stack1 : "")
    + "                        </select>\r\n\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" type=\"button\">Add</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                 \r\n\r\n\r\n                <button class=\"btn btn-danger mt-4\" type=\"button\" id=\"cancel\">Cancel</button>\r\n\r\n                <button class=\"btn btn-submit mt-4\" type=\"button\" id=\"submit\">Submit</button>\r\n\r\n                \r\n            \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n                     \r\n                     \r\n";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["dashboard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"dash-card-holder\">\r\n                    <a href=\"#kanban\" class=\"dash-card project-card\">\r\n                        <h5>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":37,"column":28},"end":{"line":37,"column":36}}}) : helper)))
    + "</h5>\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"starred") : depth0),{"name":"ifvalue","hash":{"equals":1},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":24},"end":{"line":42,"column":36}}})) != null ? stack1 : "")
    + "                        <p class=\"col-12 description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":43,"column":54},"end":{"line":43,"column":69}}}) : helper)))
    + "</p>\r\n                        <p class=\"col-12\">Time Spent: "
    + alias4(((helper = (helper = lookupProperty(helpers,"timeSpent") || (depth0 != null ? lookupProperty(depth0,"timeSpent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeSpent","hash":{},"data":data,"loc":{"start":{"line":44,"column":54},"end":{"line":44,"column":67}}}) : helper)))
    + " hours</p>\r\n                    </a>\r\n                </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                            <span class=\"material-icons favorite\">\r\n                            star\r\n                            </span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"nav"),depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid backdrop-dash\">\r\n\r\n        \r\n\r\n        <div class=\"dash-container col-12 col-md-10\">\r\n\r\n            <h2 class=\"dash-header p-2\" style=\"width: 100%;\">Dashboard</h2>\r\n\r\n            <div class=\"dash-card-holder\">\r\n\r\n                <a href=\"#projects\" class=\"dash-card\">\r\n                    <h5>Projects</h5>\r\n                </a>\r\n                \r\n            </div>\r\n\r\n            <div class=\"dash-card-holder\">\r\n\r\n                <a href=\"#calendar\" class=\"dash-card\">\r\n                    <h5>Calendar</h5>\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"dash-card-holder\">\r\n                <a href=\"#personalBoard\" class=\"dash-card\">\r\n                    <h5>Personal Board</h5>\r\n                </a>\r\n            </div>\r\n\r\n            <h2 class=\"dash-header p-2\" style=\"width: 100%;\">Recently Viewed</h2>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"starredProjects") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":47,"column":21}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["example"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "            <p>Counter is 1!</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"sidenav"),depth0,{"name":"sidenav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <button type=\"button\" class=\"btn btn-primary m-2\" id=\"clickButton\">Click!</button>\r\n\r\n        <!-- The curly brackets indicates Handlebars being used. There is a variable in the model called counter that is being referenced here -->\r\n        <p id=\"counter\">Counter: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"counter") || (depth0 != null ? lookupProperty(depth0,"counter") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"counter","hash":{},"data":data,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":44}}}) : helper)))
    + "</p> \r\n\r\n\r\n        <!-- Example of using a handlebarHelper -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||alias2).call(alias1,1,{"name":"ifvalue","hash":{"equals":(depth0 != null ? lookupProperty(depth0,"counter") : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":13,"column":20}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["Kanban"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"ifvalue","hash":{"equals":0},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":32},"end":{"line":29,"column":44}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class = \"p-1\">\r\n\r\n                                        <div class=\"kanban-card-holder\">\r\n                                            <button class=\"kanban-card task-button\" data-taskid=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"taskID") || (depth0 != null ? lookupProperty(depth0,"taskID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"taskID","hash":{},"data":data,"loc":{"start":{"line":24,"column":97},"end":{"line":24,"column":107}}}) : helper)))
    + "\" style=\"background-color:#DDDDDD\">\r\n                                                <h6 style=\"color:#333333;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":25,"column":75},"end":{"line":25,"column":83}}}) : helper)))
    + "</h6> <!-- Reference the task name -->\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"ifvalue","hash":{"equals":1},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":32},"end":{"line":55,"column":44}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class = \"p-1\">\r\n\r\n                                        <div class=\"kanban-card-holder\">\r\n                                            <button class=\"kanban-card task-button\" data-taskid=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"taskID") || (depth0 != null ? lookupProperty(depth0,"taskID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"taskID","hash":{},"data":data,"loc":{"start":{"line":46,"column":97},"end":{"line":46,"column":107}}}) : helper)))
    + "\" style=\"background-color:#FFEA8A\">\r\n                                                <h6 style=\"color:#333333;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":47,"column":75},"end":{"line":47,"column":83}}}) : helper)))
    + "</h6>\r\n                                                <p style=\"color:#333333;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"timeLogged") || (depth0 != null ? lookupProperty(depth0,"timeLogged") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeLogged","hash":{},"data":data,"loc":{"start":{"line":48,"column":74},"end":{"line":48,"column":88}}}) : helper)))
    + "</p>\r\n                                                <div class=\"progress\" style=\"height: 15px;\">\r\n                                                    <div class=\"progress-bar progress-bar-striped\" style =\"width:"
    + alias4(((helper = (helper = lookupProperty(helpers,"progress") || (depth0 != null ? lookupProperty(depth0,"progress") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"progress","hash":{},"data":data,"loc":{"start":{"line":50,"column":113},"end":{"line":50,"column":125}}}) : helper)))
    + "%\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"progress") || (depth0 != null ? lookupProperty(depth0,"progress") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"progress","hash":{},"data":data,"loc":{"start":{"line":50,"column":128},"end":{"line":50,"column":140}}}) : helper)))
    + "%</div>\r\n                                                </div>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"ifvalue","hash":{"equals":2},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":32},"end":{"line":81,"column":44}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class = \"p-1\">\r\n                                        <div class=\"kanban-card-holder\">\r\n                                            <button class=\"kanban-card task-button\" data-taskid=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"taskID") || (depth0 != null ? lookupProperty(depth0,"taskID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"taskID","hash":{},"data":data,"loc":{"start":{"line":72,"column":97},"end":{"line":72,"column":107}}}) : helper)))
    + "\" style=\"background-color:#09B0EF\">\r\n                                                <h6 style=\"color:#333333;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":73,"column":75},"end":{"line":73,"column":83}}}) : helper)))
    + "</h6>\r\n                                                <p style=\"color:#333333;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"timeLogged") || (depth0 != null ? lookupProperty(depth0,"timeLogged") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeLogged","hash":{},"data":data,"loc":{"start":{"line":74,"column":74},"end":{"line":74,"column":88}}}) : helper)))
    + "</p>\r\n                                                <div class=\"progress\" style=\"height: 15px;\">\r\n                                                    <div class=\"progress-bar progress-bar-striped\" style=\"width:"
    + alias4(((helper = (helper = lookupProperty(helpers,"progress") || (depth0 != null ? lookupProperty(depth0,"progress") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"progress","hash":{},"data":data,"loc":{"start":{"line":76,"column":112},"end":{"line":76,"column":124}}}) : helper)))
    + "%\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"progress") || (depth0 != null ? lookupProperty(depth0,"progress") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"progress","hash":{},"data":data,"loc":{"start":{"line":76,"column":127},"end":{"line":76,"column":139}}}) : helper)))
    + "%</div>\r\n                                                </div>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"ifvalue","hash":{"equals":3},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":32},"end":{"line":103,"column":44}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class = \"p-1\">\r\n                                        <div class=\"kanban-card-holder\">\r\n                                            <button class=\"kanban-card task-button\" data-taskid=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"taskID") || (depth0 != null ? lookupProperty(depth0,"taskID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"taskID","hash":{},"data":data,"loc":{"start":{"line":97,"column":97},"end":{"line":97,"column":107}}}) : helper)))
    + "\" style=\"background-color:#B9FF8A\">\r\n                                                <h6 style=\"color:#333333;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":98,"column":75},"end":{"line":98,"column":83}}}) : helper)))
    + "</h6>\r\n                                                <p style=\"color:#333333;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"timeLogged") || (depth0 != null ? lookupProperty(depth0,"timeLogged") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeLogged","hash":{},"data":data,"loc":{"start":{"line":99,"column":74},"end":{"line":99,"column":88}}}) : helper)))
    + "</p>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"projectnav"),depth0,{"name":"projectnav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"page-content-wrapper-fluid\">\r\n    <div class=\"container-fluid\">\r\n        <h2 class=\"dash-header\">Kanban Board</h2>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"testButton\">Create Task</button>\r\n        <div class=\"container-fluid\" >\r\n            <div class=\r\n                \"mb-2 border border-dark border-2 rounded-3\" style=\"background-color: #ffffff\">\r\n                <div style=\"display:flex\">\r\n                    <div class=\"col-3\">\r\n                        \r\n                        <div class=\"p-1 d-flex justify-content-center\">\r\n                            <h4 style=\"color:#333333\">Not Started</h4>\r\n                        </div>\r\n                        \r\n                        <div class=\"p-2\">\r\n                            \r\n                            <!-- Loop through each task, if status is Not started (0), then make the card-->\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? lookupProperty(stack1,"Tasks") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":28},"end":{"line":30,"column":37}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-3\">\r\n                        <div class=\"p-1 d-flex justify-content-center\">\r\n                            <h4 style=\"color:#333333\">In Progress</h4>\r\n                        </div>\r\n\r\n                        <div class=\"p-2\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? lookupProperty(stack1,"Tasks") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":28},"end":{"line":56,"column":37}}})) != null ? stack1 : "")
    + "                            \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-3\">\r\n                        <div class=\"p-1 d-flex justify-content-center\">\r\n                            <h4 style=\"color:#333333\">Testing</h4>\r\n                        </div>\r\n\r\n                        \r\n                        <div class=\"p-2\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? lookupProperty(stack1,"Tasks") : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":28},"end":{"line":82,"column":37}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-3\">\r\n                        <div class=\"p-1 d-flex justify-content-center\">\r\n                            <h4 style=\"color:#333333\">Done!</h4>\r\n                        </div>\r\n                        \r\n                        <div class=\"p-2\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? lookupProperty(stack1,"Tasks") : stack1),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":28},"end":{"line":104,"column":37}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"createtask_modal"),depth0,{"name":"createtask_modal","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["login"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid p-0\">\r\n        \r\n        <div id=\"main-contain\">\r\n\r\n            <div class=\"col-10 col-md-6 login-box py-4\">\r\n\r\n                <img class=\"login-logo\" src=\"../img/PiM.png\">\r\n                <h2>Login</h2>\r\n\r\n                <div class=\"input-group m-2\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">\r\n                            <span class=\"material-icons\">\r\n                                person\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control login-input\" \r\n                    aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\"\r\n                    placeholder=\"Enter your username\" id=\"loginUsername\">\r\n                </div>\r\n\r\n                <div class=\"input-group m-2\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">\r\n                            <span class=\"material-icons\">\r\n                                key\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input class=\"form-control login-input\" aria-label=\"Default\" \r\n                    aria-describedby=\"inputGroup-sizing-default\"\r\n                    placeholder=\"Enter password\" id=\"loginPw\" type=\"password\">\r\n                </div>\r\n\r\n                <button class=\"btn btn-primary try-login m-2\">Login</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["projects"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"group-part\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":63},"end":{"line":20,"column":71}}}) : helper)))
    + "\">\r\n                                <h6 style=\"margin-top: 10px\">\r\n                                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":36},"end":{"line":22,"column":44}}}) : helper)))
    + " \r\n                                    <span class=\"material-icons edit-group btn\" data-groupid=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"groupID") || (depth0 != null ? lookupProperty(depth0,"groupID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupID","hash":{},"data":data,"loc":{"start":{"line":23,"column":94},"end":{"line":23,"column":105}}}) : helper)))
    + "\">edit</span>\r\n                                </h6>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":34,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"lt")||(depth0 && lookupProperty(depth0,"lt"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),3,{"name":"lt","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":36},"end":{"line":32,"column":43}}})) != null ? stack1 : "")
    + "                                    \r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"ifvalue","hash":{"equals":2},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":27,"column":40},"end":{"line":31,"column":52}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "                                            <button class=\"btn\" style=\"font-size: 24px\">...</button>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <button type=\"button\" class=\"btn group-user-button\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"initials") || (depth0 != null ? lookupProperty(depth0,"initials") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"initials","hash":{},"data":data,"loc":{"start":{"line":30,"column":96},"end":{"line":30,"column":108}}}) : helper)))
    + "</button>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"mb-4 project-section\" data-project=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":44,"column":72},"end":{"line":44,"column":80}}}) : helper)))
    + "\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"project-row\">\r\n                                    <h4 class=\"project-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":47,"column":61},"end":{"line":47,"column":69}}}) : helper)))
    + "</h4>\r\n                                    <span class=\"btn project-star material-icons\" data-projectname=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":48,"column":100},"end":{"line":48,"column":108}}}) : helper)))
    + "\">\r\n                                        "
    + ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"starred") : depth0),{"name":"ifvalue","hash":{"equals":1},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":49,"column":40},"end":{"line":49,"column":105}}})) != null ? stack1 : "")
    + "\r\n                                    </span>\r\n                                </div>\r\n                                \r\n                                <p class=\"project-desc\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":53,"column":56},"end":{"line":53,"column":71}}}) : helper)))
    + "</p>\r\n\r\n                                <div class=\"project-row\">\r\n                                    <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"groups")),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":40},"end":{"line":63,"column":49}}})) != null ? stack1 : "")
    + "                                    </div>\r\n\r\n                                    <button type=\"button\" class=\"btn btn-primary edit-project\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":66,"column":107},"end":{"line":66,"column":117}}}) : helper)))
    + "\">Edit</button>\r\n                                    \r\n                                </div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "star";
},"11":function(container,depth0,helpers,partials,data) {
    return "star_border";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"groups") : depths[1]),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":44},"end":{"line":62,"column":53}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"groupID") : depths[1]),{"name":"ifvalue","hash":{"equals":depth0},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":48},"end":{"line":61,"column":60}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                    <button type=\"button\" class=\"btn group-button m-1\">"
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"name") : depths[1]), depth0))
    + "</button>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <option value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":101,"column":55},"end":{"line":101,"column":63}}}) : helper)))
    + "\">\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <tr id=\"editGroupUserRow-"
    + alias4(((helper = (helper = lookupProperty(helpers,"initials") || (depth0 != null ? lookupProperty(depth0,"initials") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initials","hash":{},"data":data,"loc":{"start":{"line":175,"column":69},"end":{"line":175,"column":81}}}) : helper)))
    + "1\" class=\"editgroup-user-row\">\r\n                                                <td style=\"width: 90%\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":176,"column":71},"end":{"line":176,"column":79}}}) : helper)))
    + "</td>\r\n                                                <td><button type=\"button\" class=\"btn edit-group-delete-user\"><span class=\"material-icons\" style=\"color: red\">delete</span></button></td>\r\n                                            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"nav"),depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <div style=\"display: flex; justify-content: center;\">\r\n            <div class=\"projects-container col-12 col-md-10\">\r\n                <!-- Teams -->\r\n                <div class=\"col-12 mt-4 mb-4 px-4\" style=\"display: flex; justify-content: right;\">\r\n                    <a href=\"#createProject\" type=\"button\" class=\"btn btn-primary\">New Project</a>\r\n                    <input type=\"text\" class=\"form-control\" id=\"projectSearch\" placeholder=\"Search projects...\" style=\"margin-left: 20px; width: 25%\">\r\n                </div>\r\n\r\n                <div class=\"col-3 group-section\" align=\"center\">\r\n                    <div style=\"display: flex; margin-bottom: 10px; justify-content: space-around\">\r\n                        <h4>Groups</h4>\r\n                        <button type=\"button\" class=\"btn btn-primary\" id=\"addGroup\" style=\"margin-left: 10px\">New</button>\r\n                    </div>\r\n                    <input type=\"text\" placeholder=\"Search groups...\" id=\"groupSearch\" class=\"form-control\">\r\n                    <div align=\"left\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"groups") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":24},"end":{"line":36,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <!-- Projects -->\r\n                <div class=\"col-9 px-3\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":20},"end":{"line":72,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Create Group -->\r\n    <div class=\"modal fade\" id=\"createGroupModal\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Create Group</h4>\r\n                    <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\"></button>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"col-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"createGroupName\">Group Name:</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"createGroupName\" placeholder=\"Name...\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group mt-4\">\r\n                                <label>Select User:</label>\r\n                                <input type=\"search\" list=\"createGroup-users\" id=\"createGroup-selectUser\">\r\n                                <datalist id=\"createGroup-users\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":36},"end":{"line":102,"column":45}}})) != null ? stack1 : "")
    + "                                </datalist>\r\n\r\n                                <button type=\"button\" class=\"btn btn-outline-primary m-2\" id=\"createGroupAddSelectedUser\">Add User</button>\r\n                            </div>\r\n\r\n                            <div class=\"selected-user-div\">\r\n                                <p style=\"display: none; color: red\" id=\"createGroup-noUserError\">Please add at least one user</p>\r\n                                <table class=\"table table-hover\" style=\"display: table; width: 100%\">\r\n                                    <thead style=\"display: block;\">\r\n                                        <tr>\r\n                                            <th>Name</th>\r\n                                            <th></th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody class=\"selected-user-tbody\" id=\"creategroup-select-user-tbody\">\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </form>        \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" id=\"confirmCreateGroup\">Create Group</button>\r\n                    <button type=\"button\" class=\"btn btn-danger close-modal\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Edit Group -->\r\n    <div class=\"modal fade\" id=\"editGroupModal\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Edit Group</h4>\r\n                    <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\"></button>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"col-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"editGroupName\">Group Name:</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"editGroupName\" placeholder=\"Name...\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"selectedGroup") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group mt-4\">\r\n                                <label>Select User:</label>\r\n                                <input type=\"search\" list=\"editGroup-users\" id=\"editGroup-selectUser\">\r\n                                <datalist id=\"editGroup-users\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":156,"column":36},"end":{"line":158,"column":45}}})) != null ? stack1 : "")
    + "                                </datalist>\r\n\r\n                                <button type=\"button\" class=\"btn btn-outline-primary m-2\" id=\"editGroupAddSelectedUser\">Add User</button>\r\n                            </div>\r\n\r\n                            <div class=\"selected-user-div\">\r\n                                <p style=\"display: none; color: red\" id=\"editGroup-noUserError\">Please add at least one user</p>\r\n                                <table class=\"table table-hover\" style=\"display: table; width: 100%\">\r\n                                    <thead style=\"display: block;\">\r\n                                        <tr>\r\n                                            <th>Name</th>\r\n                                            <th></th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody class=\"selected-user-tbody\" id=\"editgroup-selected-user-tbody\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"selectedGroup") : depth0)) != null ? lookupProperty(stack1,"users") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":40},"end":{"line":179,"column":49}}})) != null ? stack1 : "")
    + "                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </form>        \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" id=\"confirmEditGroup\">Confirm Changes</button>\r\n                    <button type=\"button\" class=\"btn btn-danger close-modal\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["Handlebars"]["templates"]["taskPage"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":40,"column":32},"end":{"line":40,"column":40}}}) : helper)))
    + "</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li class=\"list-group-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"user") || (depth0 != null ? lookupProperty(depth0,"user") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data,"loc":{"start":{"line":77,"column":56},"end":{"line":77,"column":64}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"comment") || (depth0 != null ? lookupProperty(depth0,"comment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment","hash":{},"data":data,"loc":{"start":{"line":77,"column":66},"end":{"line":77,"column":77}}}) : helper)))
    + "</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <option value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":112,"column":55},"end":{"line":112,"column":63}}}) : helper)))
    + "\">\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"projectnav"),depth0,{"name":"projectnav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid\">            \r\n        \r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <div style=\"display: flex; align-items: center;\">\r\n                    <h1>Task 2</h1>\r\n                    <h5 class=\"px-2\"><span class=\"badge bg-warning\">Inprogress</span></h5>\r\n                </div>\r\n\r\n                <div style=\"display: flex; align-items: center\">\r\n                    <h5 style=\"margin-right: 5px\">Progress:</h5>\r\n                    <div class=\"progress\" style=\"width:100%\">\r\n                        <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 88%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">88%</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"card\" style=\"width: 100%; overflow-y:scroll; max-height: 200px\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Description</h5>\r\n                        <p class=\"card-text\">Description of task 1 in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n\r\n                <div>\r\n                    <div style=\"display: flex;\">\r\n                        <h4>Assigned Users:</h4>\r\n                        <button type=\"button\" class=\"btn\" id=\"openAssignModal\"><span class=\"material-icons\">add_circle_outline</span></button>\r\n                    </div>\r\n                    <ul style=\"float: none !important\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"assigned") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":24},"end":{"line":41,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\r\n                </div>\r\n               \r\n                <br>\r\n                <div>\r\n                    <h4>Time Logged on Task:</h4>\r\n                    <p>21 Hours 23 Minutes</p>\r\n                    <h4>Projected finish date:</h4>\r\n                    <p>12-2-2020</p>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div>\r\n                    <br>\r\n                    <br>\r\n                    <h4>Problems</h4>\r\n                    <div class=\"card\" style=\"overflow-y:scroll; max-height: 150px\">\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\">Problem 1</li>\r\n                        <li class=\"list-group-item\">Problem 2</li>\r\n                        <li class=\"list-group-item\">Problem 3</li>\r\n                        <li class=\"list-group-item\">Problem 4</li>\r\n                        <li class=\"list-group-item\">Problem 5</li>\r\n                        <li class=\"list-group-item\">Problem 6</li>\r\n                    </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div>\r\n                    <br>\r\n                    <h4>Task Comment Log</h4>\r\n                    <div class=\"card\" style=\"overflow-y:scroll; max-height: 300px\">\r\n                    <ul class=\"list-group list-group-flush\" id=\"commentLog\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"messages") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":24},"end":{"line":78,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\r\n                    </div>\r\n                    <form id=\"comment-form\">\r\n                        <div class=\"form-group\" style=\"display: flex\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Send Comment...\" id=\"comment\"></textarea>\r\n                            <button type=\"button\" class=\"btn\" id=\"sendComment\"><span class=\"material-icons\">send</span></button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>    \r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"assignModal\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n\r\n                <div class=\"modal-header\">\r\n                <div class=\"container-fluid\">\r\n                    <h4>Assign To Task</h4>\r\n                </div>\r\n                <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\"></button>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                <div class=\"container-fluid\">\r\n                    <label>Assign Users:</label>\r\n                    <div style=\"display: flex;\">\r\n                        <form id=\"addUserForm\">\r\n                            <div class=\"form-group mt-0\" id=\"addUser\">\r\n                                <input type=\"search\" list=\"assignUsers\" id=\"assignUsers-selectUser\">\r\n                                <datalist id=\"assignUsers\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":36},"end":{"line":113,"column":45}}})) != null ? stack1 : "")
    + "                                </datalist>\r\n                            </div>\r\n                        </form>\r\n                        <button type=\"button\" class=\"btn\" id=\"assignUserButton\"><span class=\"material-icons\">add_circle_outline</span></button>\r\n                    </div>\r\n\r\n                    <p style=\"display: none; color: red\" id=\"assignUserError\">User already assigned to the task</p>\r\n\r\n                    <div>\r\n                        <table class=\"table table-hover\" style=\"display table; width: 100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody id=\"newAssignedUsers\">\r\n                                \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button id=\"confirmUsers\" type=\"button\" class=\"btn btn-secondary\">Add New Users</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});