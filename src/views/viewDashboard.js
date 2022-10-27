var ViewDashboard = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction',
        'click #clockInButton': 'clockInButton'
    },

    initialize: function(){

    },

    render: function(){
        this.$el.html(Handlebars.templates.dashboard(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    clockInButton: function(){
        clockInModal.open(this.model);
    },
    
});