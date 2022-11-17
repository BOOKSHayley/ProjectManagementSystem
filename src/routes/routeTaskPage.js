var RouterTaskPage = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this example page to appear
        "taskPage": 'showTaskPage'
    },

    showTaskPage: function(){
        var fade = $.Deferred();

        //Set all the defaults to the model
         taskViewPage.model.clear().set(taskViewPage.model.defaults);

         var clockedIn = localStorage.getItem('clockedIn');
        if(clockedIn){
            taskViewPage.model.set('clockedIn', JSON.parse(clockedIn));
        }

         $('#content').fadeOut(function(){
             fade.resolve();
             $('#content').html(taskViewPage.render().el);
         })
    }
});

var taskViewPage = null;
var taskModelPage = null;
var taskRouter = null;

taskModelPage = new ModelTaskPage();
taskViewPage = new ViewTaskPage({
    model: taskModelPage,
    tagName: 'div'
});

taskRouter = new RouterTaskPage();