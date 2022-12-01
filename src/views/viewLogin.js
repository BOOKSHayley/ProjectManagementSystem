var ViewLogin = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click .try-login': 'tryLogin',
        'click .is-invalid': 'clearErrorInput'
    },

    initialize: function(){

    },

    clearErrorInput: function (e) {
        $(e.target).removeClass('is-invalid');
    },

    getData: function () {
        var self = this;
        var promise = $.Deferred();
    
        const res = fetchData("");
        res.then((e) => {
          const a = Object.values(e);
          self.model.set("users", a[2]);
          //console.log(a);

          //localStorage.setItem("groups", JSON.stringify(a[0]));
          //localStorage.setItem("projects", JSON.stringify(a[1]));
          //localStorage.setItem("users", JSON.stringify(a[2]));

          promise.resolve();
        });


    
        return promise.promise();
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
        var self = this;

        attempt = {
            un: $('#loginUsername').val(),
            pw: $('#loginPw').val()
        }

        var checks = self.model.get("users");
        var loggedIn = false;

        $.each(checks, function (k, v) {
            if(v.username == attempt.un && v.pw == attempt.pw) {

                loggedIn = true;
                window.location.href = '#dashboard';
            }
        });

        if(loggedIn == false) {
            $('#loginUsername').addClass('is-invalid');
            $('#loginPw').addClass('is-invalid');
        }

        console.log(checks[checks.length - 1]);

        
    }
});