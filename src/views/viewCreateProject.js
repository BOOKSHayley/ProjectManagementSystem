

var ViewCreateProject = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #cancel': 'cancel',
        'click #submit': 'submit',
    },

    initialize: function(){

    },
    cancel: function(){
        window.location.href = '#projects';
    },
    submit: function(){
        var newProject = {
            Tasks: [], 
            description: "", 
            groups: [], 
            name: "", 
            projectID: 0, 
            starred: 0, 
            timeSpent: 0
        }
    },

    render: function(){
        this.$el.html(Handlebars.templates.createProject(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    getData: function(){
        var self = this; 
        var promise = $.Deferred(); 
        const res = fetchData("groups"); 
        res.then((e)=> {
            self.model.set("groups", Object.values(e));
            promise.resolve(); 
        })

        return promise.promise();

       
    }
});