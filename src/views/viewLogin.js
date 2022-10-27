var ViewLogin = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click .try-login': 'tryLogin'
    },

    initialize: function(){

    },

    render: function(){
        this.$el.html(Handlebars.templates.login(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    tryLogin: function(){
        window.location.href = '#dashboard';
    }
});