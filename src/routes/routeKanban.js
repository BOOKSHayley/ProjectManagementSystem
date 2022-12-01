var RouterKanban = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this kanban page to appear
        "kanban/:projectName": 'showKanban'
    },

    showKanban: function(projectName){
        var fade = $.Deferred();


        //Set all the defaults to the model
        kanbanViewPage.model.clear().set(kanbanViewPage.model.defaults);
        kanbanViewPage.model.set('projectName', projectName)
        kanbanViewPage.model.set('currentUser', JSON.parse(localStorage.getItem("pimUserData")));

        var clockedIn = localStorage.getItem('clockedIn');
        if(clockedIn){
            kanbanViewPage.model.set('clockedIn', JSON.parse(clockedIn));
        }

        kanbanViewPage.getData().done(function(){
            $('#content').fadeOut(function(){
                fade.resolve();
                $('#content').html(kanbanViewPage.render().el);
            })
        })
        
    }
});

var kanbanViewPage = null;
var kanbanModelPage = null;
var kanbanRouter = null;

kanbanModelPage = new ModelKanban();
kanbanViewPage = new ViewKanban({
    model: kanbanModelPage,
    tagName: 'div'
});

kanbanRouter = new RouterKanban();