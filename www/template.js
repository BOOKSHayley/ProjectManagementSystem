this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["example"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "            <p>Counter is 1!</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <button type=\"button\" class=\"btn btn-primary m-2\" id=\"clickButton\">Click!</button>\r\n\r\n        <!-- The curly brackets indicates Handlebars being used. There is a variable in the model called counter that is being referenced here -->\r\n        <p id=\"counter\">Counter: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"counter") || (depth0 != null ? lookupProperty(depth0,"counter") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"counter","hash":{},"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":44}}}) : helper)))
    + "</p> \r\n\r\n\r\n        <!-- Example of using a handlebarHelper -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifvalue")||(depth0 && lookupProperty(depth0,"ifvalue"))||alias2).call(alias1,1,{"name":"ifvalue","hash":{"equals":(depth0 != null ? lookupProperty(depth0,"counter") : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":12,"column":20}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["login"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"sidenav"),depth0,{"name":"sidenav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"page-content-wrapper\">\r\n    <div class=\"container-fluid p-0\">\r\n        \r\n        <div id=\"main-contain\">\r\n\r\n            <div class=\"col-10 col-md-6 login-box py-4\">\r\n\r\n                <h2>Login</h2>\r\n\r\n                <div class=\"input-group m-2\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">\r\n                            <span class=\"material-symbols-outlined\">\r\n                                mail\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control login-input\" \r\n                    aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\"\r\n                    placeholder=\"Enter your email\" id=\"loginEmail\">\r\n                </div>\r\n\r\n                <div class=\"input-group m-2\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">\r\n                            <span class=\"material-symbols-outlined\">\r\n                                key\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control login-input\" aria-label=\"Default\" \r\n                    aria-describedby=\"inputGroup-sizing-default\"\r\n                    placeholder=\"Enter password\" id=\"loginPw\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});