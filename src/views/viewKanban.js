var ViewKanban = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction',
        'click .task-button': 'showTaskModal',
        'click #timer': 'timer'
    },

    initialize: function(){

    },

    render: function(){
        this.$el.html(Handlebars.templates.Kanban(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    showTaskModal: function(e){
        var taskID = $(e.currentTarget).attr('data-taskid');
        var tasks = this.model.get('project')['Tasks'];
        var task = null;

        for(const [key, value] of Object.entries(tasks)){
            if(value['taskID'] == taskID){
                task = value;
                break;
            }
        }

        this.model.set('currentTask', task);
        taskModal.open(this.model);
    },
    timer: function(){
        //Quick function for clock in/out

        var clockedIn = this.model.get('clockedIn');

        if(clockedIn){
            clockOutModal.open(this.model);
        } else {
            clockInModal.open(this.model);
        }
    },

    getData: function(projectID){
        var self = this;

        var promise = $.Deferred();

        const db = fetchData("projects");
        db.then((e)=> {
            var projects = Object.values(e);
            var project = null;
            for(var i = 0; i < projects.length; i++){
                if(projects[i]['projectID'] == projectID){
                    project = projects[i];
                    break;
                }
            }

            self.model.set('project', project);
            promise.resolve();
        });

        return promise.promise();
    }
});