var ModelDashboard = Backbone.Model.extend({
    defaults: {
        counter: 0
    },

    initialize: function(){
        
    }
});
var ModelExample = Backbone.Model.extend({
    defaults: {
        counter: 0
    },

    initialize: function(){
        
    }
});
var ModelLogin = Backbone.Model.extend({
    defaults: {
        
    },

    initialize: function(){
        
    }
});
var ViewDashboard = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction',
        'click #clockIn': 'clockIn'
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

    clockIn: function(){
        clockInModal.open(this.model);
    }
});
var ViewExample = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction'
    },

    initialize: function(){

    },

    render: function(){
        this.$el.html(Handlebars.templates.example(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    clickButtonFunction: function(){
        var self = this;
        // self.model.get("variableName") Gets the variable from the model

        console.log('here');
        var counter = parseInt(self.model.get('counter')); 

        counter += 1;

        self.model.set('counter', counter); //Set a new value to the model

        self.render(); //Need to re-render so that the HBS updates
        
    },
});
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
        if($('#loginEmail').val() == 'email' && $('#loginPw').val() == 'password') {
            window.location.href = '#dashboard';
        }
    }
});
var RouterDashboard = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this dashboard page to appear
        "dashboard": 'showDashboard'
    },

    showDashboard: function(){
        var fade = $.Deferred();

        console.log('here');

        //Set all the defaults to the model
        dashboardViewPage.model.clear().set(dashboardViewPage.model.defaults);

        $('#content').fadeOut(function(){
            fade.resolve();
            $('#content').html(dashboardViewPage.render().el);
        })
    }
});

var dashboardViewPage = null;
var dashboardModelPage = null;
var dashboardRouter = null;

dashboardModelPage = new ModelDashboard();
dashboardViewPage = new ViewDashboard({
    model: dashboardModelPage,
    tagName: 'div'
});

dashboardRouter = new RouterDashboard();
var RouterExample = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this example page to appear
        "": 'showExample',
        "/": 'showExample',
        "#": 'showExample'
    },

    showExample: function(){
        var fade = $.Deferred();

        window.location.href = '#login';

        //Set all the defaults to the model
        // exampleViewPage.model.clear().set(exampleViewPage.model.defaults);

        // $('#content').fadeOut(function(){
        //     fade.resolve();
        //     $('#content').html(exampleViewPage.render().el);
        // })
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
var RouterLogin = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this login page to appear
        "login": 'showLogin'
    },

    showLogin: function(){
        var fade = $.Deferred();

        console.log('here');

        //Set all the defaults to the model
        loginViewPage.model.clear().set(loginViewPage.model.defaults);

        $('#content').fadeOut(function(){
            fade.resolve();
            $('#content').html(loginViewPage.render().el);
        })
    }
});

var loginViewPage = null;
var loginModelPage = null;
var loginRouter = null;

loginModelPage = new ModelLogin();
loginViewPage = new ViewLogin({
    model: loginModelPage,
    tagName: 'div'
});

loginRouter = new RouterLogin();
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

var clockInModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#clockInModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="clockInModalDiv"></div>';
            $('body').append(div);

            $('#clockInModalDiv').append(Handlebars.partials.clockin_modal(model.toJSON()));

            $('#clockInModal').modal('show');

            $('#clockInModal').on('hidden.bs.modal', function(){
                $('#clockInModalDiv').remove();
                console.log('promise resolved');
                promise.resolve();
            });

            $(document).on('click', '.clockin-card', function(e){
                $(e.target).closest('button').toggleClass('active');
            });

            $(document).on('click', '#clockInModalClockIn', function(e){
                //Save clock in
                var selectedTasks = [];

                $('.clockin-card.active').each(function(){
                    selectedTasks.push($(this).attr('data-taskid'));
                });


                model.set('clockedIn', true);
                model.set('clockedInTasks', selectedTasks);
                $('#clockInModal').modal('hide');
            });
            
        }

        return promise.promise();
    },

    close: function(){

        $('#clockInModal').modal('hide');
        $('#clockInModalDiv').remove();

    }
}

function clockInModalOpen() {
    return $('#clockInModalDiv').length > 0;
}