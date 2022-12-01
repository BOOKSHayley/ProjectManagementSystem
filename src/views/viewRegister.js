var ViewRegister = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click .try-register': 'tryRegister',
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
    
        const res = fetchData("users");
        res.then((e) => {
          const a = Object.values(e);
          self.model.set("users", a);
          promise.resolve();
        });


    
        return promise.promise();
      },

    render: function(){
        this.$el.html(Handlebars.templates.register(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    tryRegister: function(){
        var self = this;

        attempt = {
            un: $('#registerUsername').val(),
            firstName: $('#registerFirstName').val(),
            lastName: $('#registerLastName').val(),
            pw: $('#registerPw').val(),
            confirmPw: $('#registerConfirmPw').val(),
            newUserID: 0
        }

        attempt.initials = '';
        attempt.initials += attempt.firstName[0] + attempt.lastName[0]

        var checks = self.model.get("users");
        var valid = true;

        if(attempt.un == '') {
            $('#registerUsername').addClass('is-invalid');
            var valid = false;
        }
        if(attempt.firstName == '') {
            $('#registerFirstName').addClass('is-invalid');
            var valid = false;
        }
        if(attempt.lastName == '') {
            $('#registerLastName').addClass('is-invalid');
            var valid = false;
        }
        if(attempt.pw == '') {
            $('#registerPw').addClass('is-invalid');
            var valid = false;
        }
        if(attempt.confirmPw == '' || attempt.confirmPw != attempt.pw) {
            $('#registerConfirmPw').addClass('is-invalid');
            var valid = false;
        }

        $.each(checks, function (k, v) {
            if(v.username == attempt.un) {
                valid = false;
            }
            if(v.userID > attempt.newUserID) {
                attempt.newUserID = v.userID;
                console.log(attempt.newUserID);
            }
        });

        attempt.newUserID++;

        if(valid) {

            console.log(attempt);

            patchDatabase("users/u" + attempt.newUserID, {
                userID: attempt.newUserID,
                username: attempt.username,
                name: attempt.firstName + ' ' + attempt.lastName,
                pw: attempt.pw,
                initials: attempt.initials
              });

              window.location.href = '#login';
        }
    }
});