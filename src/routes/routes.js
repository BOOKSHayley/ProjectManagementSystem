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
