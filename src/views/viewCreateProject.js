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
        window.location.href = '#projects';
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
});