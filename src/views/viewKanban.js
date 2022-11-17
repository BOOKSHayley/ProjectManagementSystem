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

    showTaskModal: function(){
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
    }
});