var RouterKanban = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this kanban page to appear
        "kanban": 'showKanban'
    },

    showKanban: function(){
        var fade = $.Deferred();

        console.log('here');

        //Set all the defaults to the model
        kanbanViewPage.model.clear().set(kanbanViewPage.model.defaults);

        $('#content').fadeOut(function(){
            fade.resolve();
            $('#content').html(kanbanViewPage.render().el);
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