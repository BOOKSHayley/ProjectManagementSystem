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