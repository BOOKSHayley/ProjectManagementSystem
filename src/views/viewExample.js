var ViewExample = Backbone.View.extend({
    event: {

        'click #clickButton': 'clickButtonFunction'
    },

    initialize: function(){

    },

    render: function(){
        console.log(Handlebars.templates);
        this.$el.html(Handlebars.templates.example(this.model.toJSON()));

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })
        this.delegateEvents();
        return this;
    },

    clickButtonFunction: function(){
        var self = this;
        
    },
});