var ModelExample = Backbone.Model.extend({
    defaults: {

    },

    initialize: function(){
        
    }
});
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
var RouterExample = Backbone.Router.extend({
    routes: {
        "": 'showExample',
        "/": 'showExample',
        "#": 'showExample'
    },

    showExample: function(){

        console.log('router called');
        var fade = $.Deferred();

        $('#content').fadeOut(function(){
            fade.resolve();
            $('#content').html(exampleViewPage.render().el);
        })
    }
});

var exampleViewPage = null;
var exampleModelPage = null;
var exampleRouter = null;

exampleModelPage = new ModelExample();
exampleViewPage = new ViewExample({
    model: exampleModelPage,
    tagName: 'div'
});

exampleRouter = new RouterExample();
var AppRouter = Backbone.Router.extend({
    routes: {},
});
/* Global Variables */
var router = null; //Router
var fade = null; // Fade in Option
router = new AppRouter();

$(document).ready(function(){
    Backbone.emulateHTTP = true;
    Backbone.history.start();
});
