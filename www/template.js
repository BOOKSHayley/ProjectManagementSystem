this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["createProject"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"nav"),depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<!DOCTYPE html>\r\n<html>\r\n        <head>\r\n        <style>\r\n           <u> h1{text-align: center;} </u>\r\n            h3{text-align: center;}\r\n            div{text-align: center;}\r\n            p{text-align: center;}\r\n\r\n            button {\r\n                            display: inline-block;\r\n                            background-color: #bfbcc3;\r\n                            border-radius: 10px;\r\n                            color: #000000;\r\n                            text-align: center;\r\n                            font-size: 12px;\r\n                            padding: 5px;\r\n                            width: 100px;\r\n                            cursor: pointer;\r\n                            margin: 5px;\r\n            }\r\n\r\n            .createProject{\r\n                        display: inline-block;\r\n                            background-color: #09b0ef;\r\n                            border-radius: 10px;\r\n                            color: #000000;\r\n                            text-align: center;\r\n                            font-size: 30px;\r\n                            padding: 10px;\r\n                            width: 125px;\r\n                            cursor: pointer;\r\n                            margin: 10px;\r\n                \r\n            }\r\n            \r\n\r\n            \r\n        </style>\r\n        </head>\r\n    <div class=\"page-content-wrapper\"></div>\r\n    <body>\r\n           \r\n            <h1><u>Create Project</u></h1> \r\n            <h3>Project Name:</h3>\r\n                <form action=\"/action_page.php\">\r\n                    <label for=\"ProjectName\"></label>\r\n                    <input type=\"text\" id=\"ProjectName\" name=\"ProjectName\"><br><br>\r\n                    \r\n                   \r\n                </form>\r\n            <h3>Description</h3>\r\n                <textarea cols = \"50\" rows = \"5\"></textarea>\r\n                <form action=\"/action_page.php\">\r\n                    \r\n                    \r\n                </form>\r\n            <h3>Members</h3>\r\n            <head>\r\n                <p>Select your members individually or by groups</p>\r\n                <select name = \"dropdown\">\r\n                <option value = \"Olivia\">Olivia</option>\r\n                <option value = \"Haley\">Haley</option>\r\n                <option value = \"Logan\" >Logan</option>\r\n                <option value = \"Vaughn\">Vaughn</option>\r\n                <option value = \"Dean\">Dean</option>\r\n                <option value = \"Zach\">Zach</option>\r\n                          \r\n                </select>\r\n                <button type=\"button\">Add Member</button>\r\n                </form>\r\n                </body>\r\n                    \r\n                <h3>Select Group</h3>\r\n                <select name = \"dropdown\">\r\n                    <option value = \"Group 1\" selected>Group 1</option>\r\n                    <option value = \"Group 2\">Group 2</option>\r\n                </select>\r\n                <button type=\"button\">Add Group</button>\r\n\r\n                <h3>Select Technologies</h3>\r\n\r\n                    <select name = \"dropdown\">\r\n                    <option value = \"HTML\" selected>HTML</option>\r\n                    <option value = \"CSC\">CSC</option>\r\n                </select>\r\n                <button type=\"button\">Add Technologies</button>\r\n        <div class = \"container\">\r\n                <div class=\"vertical-center\">\r\n                     <button class=\"createProject\" value=\"Submit\">Create Project         \r\n                           \r\n                     </button>\r\n                     \r\n                </div>\r\n        </div>\r\n               \r\n                             \r\n                    </script>\r\n            \r\n                 \r\n                     \r\n                     \r\n";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["dashboard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"dash-card-holder\">\r\n                    <a href=\"#project/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectID") || (depth0 != null ? lookupProperty(depth0,"projectID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectID","hash":{},"data":data,"loc":{"start":{"line":36,"column":38},"end":{"line":36,"column":51}}}) : helper)))
    + "\" class=\"dash-card project-card\">\r\n                        <h5>"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":37,"column":28},"end":{"line":37,"column":43}}}) : helper)))
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
    + "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <h2 class=\"dash-header\">Dashboard</h2>\r\n\r\n        <div class=\"dash-container\">\r\n            <div class=\"dash-card-holder\">\r\n\r\n                <a href=\"#projects\" class=\"dash-card\">\r\n                    <h5>Projects</h5>\r\n                </a>\r\n                \r\n            </div>\r\n\r\n            <div class=\"dash-card-holder\">\r\n\r\n                <a href=\"#calendar\" class=\"dash-card\">\r\n                    <h5>Calendar</h5>\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"dash-card-holder\">\r\n                <a href=\"#personalBoard\" class=\"dash-card\">\r\n                    <h5>Personal Board</h5>\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <h2 class=\"dash-header\">Projects</h2>\r\n\r\n        <div class=\"dash-container\">\r\n\r\n"
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
this["Handlebars"]["templates"]["Kanban"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"nav"),depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"page-content-wrapper-fluid\">\r\n    <div class=\"container-fluid\">\r\n        <h2 class=\"dash-header\">Kanban Board</h2>\r\n        <div class=\"container-fluid\">\r\n            <div class=\r\n                \"p-2 mb-2 \r\n                border border-dark border-4 rounded-3\">\r\n                <div style=\"display:flex\">\r\n                    <div class=\"col-3 p-1\">\r\n                        <h4 class=\"dash-header\">Not Started</h4>\r\n                        <div class=\r\n                            \"p-2\">\r\n\r\n\r\n                            \r\n                            \r\n                            <div class = \"p-1\">\r\n                                <div class=\"card bg-secondary-50 text-white\">\r\n                                    <a href=\"#task5\" class=\"card-body\">\r\n                                        <h6 class=\"card-title\">Task 5</h6>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class = \"p-1\">\r\n                                <div class=\"card bg-secondary-50 text-white\">\r\n                                    <a href=\"#task6\" class=\"card-body\">\r\n                                        <h6 class=\"card-title\">Task 6</h6>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-3 p-1\">\r\n                        <h4 class=\"dash-header\">In Progress</h4>\r\n                        <div class=\r\n                            \"p-2\">\r\n                            <div class = \"p-1\">\r\n                                <div class=\"card bg-secondary-50 text-white\">\r\n                                    <a href=\"#task3\" class=\"card-body\">\r\n                                        <h6 class=\"card-title\">Task 3</h6>\r\n                                        <p class=\"card-text\">6 hr.</p>\r\n                                        <div class=\"progress\" style=\"height: 15px;\">\r\n                                            <div class=\"progress-bar progress-bar-striped\" style =\"width:50%\">25%</div>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class = \"p-1\">\r\n                                <div class=\"card bg-secondary-50 text-white\">\r\n                                    <a href=\"#task4\" class=\"card-body\">\r\n                                        <h6 class=\"card-title\">Task 4</h6>\r\n                                        <p class=\"card-text\">2 hr.</p>\r\n                                        <div class=\"progress\" style=\"height: 15px;\">\r\n                                            <div class=\"progress-bar progress-bar-striped\" style=\"width:20%\">25%</div>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-3 p-1\">\r\n                        <h4 class=\"dash-header\">Testing</h4>\r\n                        <div class=\r\n                            \"p-2\">\r\n                            <div class = \"p-1\">\r\n                                <div class=\"card bg-secondary-50 text-white\">\r\n                                    <a href=\"#task2\" class=\"card-body\">\r\n                                        <h6 class=\"card-title\">Task 2</h6>\r\n                                        <p class=\"card-text\">3 hr.</p>\r\n                                        <div class=\"progress\" style=\"height: 15px;\">\r\n                                            <div class=\"progress-bar progress-bar-striped\" style=\"width:90%\">25%</div>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-3 p-1\">\r\n                        <h4 class=\"dash-header\">Done!</h4>\r\n                        <div class=\r\n                            \"p-2\">\r\n                            <div class = \"p-1\">\r\n                                <div class=\"card bg-secondary-50 text-white\">\r\n                                    <a href=\"#task1\" class=\"card-body\">\r\n                                        <h6 class=\"card-title\">Task 1</h6>\r\n                                        <p class=\"card-text\">20 hr.</p>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["login"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid p-0\">\r\n        \r\n        <div id=\"main-contain\">\r\n\r\n            <div class=\"col-10 col-md-6 login-box py-4\">\r\n\r\n                <img class=\"login-logo\" src=\"../img/PiM.png\">\r\n                <h2>Login</h2>\r\n\r\n                <div class=\"input-group m-2\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">\r\n                            <span class=\"material-icons\">\r\n                                mail\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control login-input\" \r\n                    aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\"\r\n                    placeholder=\"Enter your email\" id=\"loginEmail\">\r\n                </div>\r\n\r\n                <div class=\"input-group m-2\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">\r\n                            <span class=\"material-icons\">\r\n                                key\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input class=\"form-control login-input\" aria-label=\"Default\" \r\n                    aria-describedby=\"inputGroup-sizing-default\"\r\n                    placeholder=\"Enter password\" id=\"loginPw\" type=\"password\">\r\n                </div>\r\n\r\n                <button class=\"btn btn-primary try-login m-2\">Login</button>\r\n                <a class=\"register-link\" href=\"#register\">New to PiM?</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["projects"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"group-part\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":59},"end":{"line":11,"column":67}}}) : helper)))
    + "\">\r\n                            <h6 style=\"margin-top: 10px\">\r\n                                "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":13,"column":32},"end":{"line":13,"column":40}}}) : helper)))
    + " \r\n                                <span class=\"material-icons edit-group btn\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":14,"column":88},"end":{"line":14,"column":98}}}) : helper)))
    + "\">edit</span>\r\n                            </h6>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":25,"column":37}}})) != null ? stack1 : "")
    + "                        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"lt")||(depth0 && lookupProperty(depth0,"lt"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),3,{"name":"lt","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":32},"end":{"line":23,"column":39}}})) != null ? stack1 : "")
    + "                                \r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"ifvalue","hash":{"equals":2},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":22,"column":48}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "                                        <button class=\"btn\" style=\"font-size: 24px\">...</button>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <button type=\"button\" class=\"btn group-user-button\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"initials") || (depth0 != null ? lookupProperty(depth0,"initials") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"initials","hash":{},"data":data,"loc":{"start":{"line":21,"column":92},"end":{"line":21,"column":104}}}) : helper)))
    + "</button>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"m-4 project-section\" data-project=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"projectID") || (depth0 != null ? lookupProperty(depth0,"projectID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectID","hash":{},"data":data,"loc":{"start":{"line":45,"column":67},"end":{"line":45,"column":80}}}) : helper)))
    + "\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"project-row\">\r\n                                <h4 class=\"project-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":48,"column":57},"end":{"line":48,"column":65}}}) : helper)))
    + "</h4>\r\n                                <span class=\"btn project-star material-icons\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":49,"column":90},"end":{"line":49,"column":100}}}) : helper)))
    + "\">\r\n                                    "
    + ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"starred") : depth0),{"name":"ifvalue","hash":{"equals":1},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":50,"column":36},"end":{"line":50,"column":101}}})) != null ? stack1 : "")
    + "\r\n                                </span>\r\n                            </div>\r\n                            \r\n                            <p class=\"project-desc\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":54,"column":52},"end":{"line":54,"column":67}}}) : helper)))
    + "</p>\r\n\r\n                            <div class=\"project-row\">\r\n                                <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"groups")),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":36},"end":{"line":64,"column":45}}})) != null ? stack1 : "")
    + "                                </div>\r\n\r\n                                <button type=\"button\" class=\"btn btn-primary edit-project\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":67,"column":103},"end":{"line":67,"column":113}}}) : helper)))
    + "\">Edit</button>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n";
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

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"groups") : depths[1]),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":40},"end":{"line":63,"column":49}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"groupID") : depths[1]),{"name":"ifvalue","hash":{"equals":depth0},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":44},"end":{"line":62,"column":56}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                <button type=\"button\" class=\"btn btn-outline-primary m-1\">"
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
    + alias4(((helper = (helper = lookupProperty(helpers,"userID") || (depth0 != null ? lookupProperty(depth0,"userID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userID","hash":{},"data":data,"loc":{"start":{"line":175,"column":69},"end":{"line":175,"column":79}}}) : helper)))
    + "\" class=\"editgroup-user-row\">\r\n                                                <td style=\"width: 90%\">"
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
    + "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <div style=\"display: flex\">\r\n            <!-- Teams -->\r\n            <div class=\"col-2 group-section\" align=\"center\">\r\n                <h4>Groups</h4>\r\n                <input type=\"text\" placeholder=\"Search groups...\" id=\"groupSearch\" class=\"form-control\">\r\n                <div align=\"left\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"groups") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":27,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n\r\n                <button type=\"button\" class=\"btn\" id=\"addGroup\">\r\n                    <span class=\"material-icons\" style=\"font-size: 30px\">add_circle_outline</span>\r\n                </button>\r\n                \r\n            </div>\r\n\r\n            <!-- Projects -->\r\n            <div class=\"col-9\">\r\n                \r\n                <div style=\"display: flex; margin-left: 2em; margin-top: 2em; margin-bottom: -1em;\">\r\n                    <button type=\"button\" class=\"btn btn-primary\">New Project</button>\r\n                    <input type=\"text\" class=\"form-control\" id=\"projectSearch\" placeholder=\"Search projects...\" style=\"margin-left: 20px; width: 50%\">\r\n                </div>\r\n                \r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":16},"end":{"line":73,"column":25}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Create Group -->\r\n    <div class=\"modal fade\" id=\"createGroupModal\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Create Group</h4>\r\n                    <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\"></button>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"col-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"createGroupName\">Group Name:</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"createGroupName\" placeholder=\"Name...\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group mt-4\">\r\n                                <label>Select User:</label>\r\n                                <input type=\"search\" list=\"createGroup-users\" id=\"createGroup-selectUser\">\r\n                                <datalist id=\"createGroup-users\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":36},"end":{"line":102,"column":45}}})) != null ? stack1 : "")
    + "                                </datalist>\r\n\r\n                                <button type=\"button\" class=\"btn btn-outline-primary m-2\" id=\"createGroupAddSelectedUser\">Add User</button>\r\n                            </div>\r\n\r\n                            <div class=\"selected-user-div\">\r\n                                <p style=\"display: none; color: red\" id=\"createGroup-noUserError\">Please add at least one user</p>\r\n                                <table class=\"table table-hover\" style=\"display: table; width: 100%\">\r\n                                    <thead style=\"display: block;\">\r\n                                        <tr>\r\n                                            <th>Name</th>\r\n                                            <th></th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody class=\"selected-user-tbody\" id=\"creategroup-select-user-tbody\">\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </form>        \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" id=\"confirmCreateGroup\">Create Group</button>\r\n                    <button type=\"button\" class=\"btn btn-danger close-modal\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Edit Group -->\r\n    <div class=\"modal fade\" id=\"editGroupModal\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Edit Group</h4>\r\n                    <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\"></button>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"col-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"editGroupName\">Group Name:</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"editGroupName\" placeholder=\"Name...\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"selectedGroup") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group mt-4\">\r\n                                <label>Select User:</label>\r\n                                <input type=\"search\" list=\"editGroup-users\" id=\"editGroup-selectUser\">\r\n                                <datalist id=\"editGroup-users\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":156,"column":36},"end":{"line":158,"column":45}}})) != null ? stack1 : "")
    + "                                </datalist>\r\n\r\n                                <button type=\"button\" class=\"btn btn-outline-primary m-2\" id=\"editGroupAddSelectedUser\">Add User</button>\r\n                            </div>\r\n\r\n                            <div class=\"selected-user-div\">\r\n                                <p style=\"display: none; color: red\" id=\"editGroup-noUserError\">Please add at least one user</p>\r\n                                <table class=\"table table-hover\" style=\"display: table; width: 100%\">\r\n                                    <thead style=\"display: block;\">\r\n                                        <tr>\r\n                                            <th>Name</th>\r\n                                            <th></th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody class=\"selected-user-tbody\" id=\"editgroup-selected-user-tbody\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"selectedGroup") : depth0)) != null ? lookupProperty(stack1,"users") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":40},"end":{"line":179,"column":49}}})) != null ? stack1 : "")
    + "                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </form>        \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" id=\"confirmEditGroup\">Edit Group</button>\r\n                    <button type=\"button\" class=\"btn btn-danger close-modal\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});