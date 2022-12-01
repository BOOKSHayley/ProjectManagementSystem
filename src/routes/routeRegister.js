var RouterRegister = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this register page to appear
        "register": 'showRegister'
    },

    showRegister: function(){
        var fade = $.Deferred();

        //Set all the defaults to the model
        registerViewPage.model.clear().set(registerViewPage.model.defaults);

        localStorage.setItem('clockedIn', JSON.stringify(false));
        
        registerViewPage.getData().done(function () {
            $("#content").fadeOut(function () {
                fade.resolve();
                $("#content").html(registerViewPage.render().el);
            });
        });
    }
});

var registerViewPage = null;
var registerModelPage = null;
var registerRouter = null;

registerModelPage = new ModelRegister();
registerViewPage = new ViewRegister({
    model: registerModelPage,
    tagName: 'div'
});

registerRouter = new RouterRegister();