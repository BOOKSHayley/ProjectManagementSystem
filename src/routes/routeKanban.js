var RouterKanban = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this kanban page to appear
        "kanban/:projectID": 'showKanban'
    },

    showKanban: function(projectID){
        var fade = $.Deferred();

        console.log('here');

        //Set all the defaults to the model
        kanbanViewPage.model.clear().set(kanbanViewPage.model.defaults);
        kanbanViewPage.model.set('projectID', projectID)

        var clockedIn = localStorage.getItem('clockedIn');
        if(clockedIn){
            kanbanViewPage.model.set('clockedIn', JSON.parse(clockedIn));
        }

        kanbanViewPage.getData(projectID).done(function(){
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