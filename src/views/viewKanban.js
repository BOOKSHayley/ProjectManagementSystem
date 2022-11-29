var ViewKanban = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction',
        'click .task-button': 'showTaskModal',
        'click #navTimer': 'navTimer'
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
    navTimer: function(){
        if(this.model.get('clockedIn')){
            clockOutModal.open(this.model);
        }else{
            clockInModal.open(this.model);
        }
    },
    
    getData: function(){
      var self = this;

      var promise = $.Deferred();

      const db = fetchData("projects/" + self.model.get('projectName'));
      db.then((e)=> {
          self.model.set('project', e);
          promise.resolve();
      });

      return promise.promise();
    },
});