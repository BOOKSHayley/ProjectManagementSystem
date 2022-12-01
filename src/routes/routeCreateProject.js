var RouterCreateProject = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this createProject page to appear
        "createProject": 'showCreateProject',
      
    },

    showCreateProject: function(){
        var fade = $.Deferred();

        

       // Set all the defaults to the model
        createProjectViewPage.model.clear().set(createProjectViewPage.model.defaults);

        createProjectViewPage.getData().done(function(){
            $('#content').fadeOut(function(){
                fade.resolve();
                $('#content').html(createProjectViewPage.render().el);
            })
        })
        
    }
});
var createProjectViewPage = null;
var createProjectModelPage = null;
var createProjectRouter = null;

createProjectModelPage = new ModelCreateProject();
createProjectViewPage = new ViewCreateProject({
    model: createProjectModelPage,
    tagName: 'div'
});

createProjectRouter = new RouterCreateProject();