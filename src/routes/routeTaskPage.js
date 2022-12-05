var RouterTaskPage = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this example page to appear
        "taskPage/:projectName/:taskID": 'showTaskPage'
    },

    showTaskPage: function(projectName, taskID){
        var fade = $.Deferred();

        //Set all the defaults to the model
         taskViewPage.model.clear().set(taskViewPage.model.defaults);
         taskViewPage.model.set('projectName', projectName);
         taskViewPage.model.set('taskID', taskID);
         taskViewPage.model.set('currentUser', JSON.parse(localStorage.getItem("pimUserData")));

         var clockedIn = localStorage.getItem('clockedIn');
        if(clockedIn){
            taskViewPage.model.set('clockedIn', JSON.parse(clockedIn));
        }
        
        taskViewPage.getData().done(function(){
            $('#content').fadeOut(function(){
                fade.resolve();
                $('#content').html(taskViewPage.render().el);
            })
        });
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