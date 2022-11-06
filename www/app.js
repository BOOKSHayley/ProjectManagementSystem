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
var ModelProjects = Backbone.Model.extend({
    defaults: {
        projects: [
            {
                projectID: 10293,
                name: 'Project 1',
                starred: 1,
                description: 'My first project',
                groups: [18949]
            },
            {
                projectID: 38893,
                name: 'Serious Project',
                starred: 1,
                description: 'This is a serious project for serious people',
                groups: [18949, 31829]
            },
            {
                projectID: 41882,
                name: 'Fun Project',
                starred: 0,
                description: 'Just for fun lol',
                groups: [21943]
            }
        ],
        groups: [
            {
                groupID: 18949,
                name: 'My first group',
                users: [
                    {userID: 1, name: 'Hayley Roberts', initials: 'HR'},
                    {userID: 2, name: 'Logan Lafauci', initials: 'LL'},
                    {userID: 3, name: 'Zack Faulkner', initials: 'ZF'},
                    {userID: 5, name: 'Olivia Cheung', initials: 'OC'},
                    {userID: 6, name: 'Vaughn Ohlerking', initials: 'VO'},
                ]
            },
            {
                groupID: 31829,
                name: 'Work group',
                users: [
                    {userID: 3, name: 'Zack Faulkner', initials: 'ZF'},
                    {userID: 5, name: 'Olivia Cheung', initials: 'OC'},
                    {userID: 6, name: 'Vaughn Ohlerking', initials: 'VO'},
                    {userID: 4, name: 'Dean Compton', initials: 'DC'}
                ]
            },
            {
                groupID: 21943,
                name: 'Fun group',
                users: [
                    {userID: 1, name: 'Hayley Roberts', initials: 'HR'},
                    {userID: 5, name: 'Olivia Cheung', initials: 'OC'},
                ]
            }
        ],
        users: [
            {userID:1, name: 'Hayley Roberts', initials: 'HR'},
            {userID:2, name: 'Logan Lafauci', initials: 'LL'},
            {userID:3, name: 'Zack Faulkner', initials: 'ZF'},
            {userID:4, name: 'Dean Compton', initials: 'DC'},
            {userID:5, name: 'Olivia Cheung', initials: 'OC'},
            {userID:6, name: 'Vaughn Ohlerking', initials: 'VO'},
        ]
    },

    initialize: function(){
        
    }
});
var ViewDashboard = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction'
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
        window.location.href = '#dashboard';
    }
});
var ViewProjects = Backbone.View.extend({
    events: {
        'click #addGroup': 'addGroupModal',
        'click #createGroupAddSelectedUser': 'createGroupAddSelectedUser',
        'click .create-group-delete-user': 'createGroupModalRemoveUser',
        'click #confirmCreateGroup': 'confirmAddGroup',
        'click .edit-group': 'editGroupModal',
        'click #editGroupAddSelectedUser': 'editGroupAddUser',
        'click .edit-group-delete-user': 'editGroupDeleteUser',
        'click #confirmEditGroup': 'confirmEditGroup',
        'click .project-star': 'starProject',
        'click .project-section': 'goToKanban',
        'click .edit-project': 'editProject'
    },

    initialize: function(){

    },

    render: function(){
        this.$el.html(Handlebars.templates.projects(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    //Add Group
    addGroupModal: function(){
        $('#createGroupModal').modal('show');
    },
    createGroupAddSelectedUser: function(){
        var name = $('#createGroup-selectUser').val();

        var users = this.model.get('users');
        var user = null;
        var i;
        for(i = 0; i < users.length; i++){
            if(users[i]['name'] == name){
                user = users[i];
                break;
            }
        }

        if(user){
            var tr = '<tr id="userRow-' + i + '" class="user-row"><td>' + user['name'] + 
            '</td> <td><button type="button" class="btn create-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';

            if($("#userRow-" + user['userID']).length === 0){
                $('#selected-user-tbody').append(tr);    
            }

            //Clear the input
            $('#createGroup-selectUser').val('');
        }
    },
    createGroupModalRemoveUser: function(e){
        $(e.currentTarget).closest('tr').remove();
    },
    confirmAddGroup: function(){
        var groups = this.model.get('groups');
        var users = this.model.get('users');

        var newGroup = {
            groupID: Math.random() * 10000,
            name: $('#createGroupName').val(),
            users: []
        };

        $('.user-row').each(function(){
            newGroup.users.push(users[$(this).attr('id').split('-')[1]]);
        });

        var valid = true;

        if(!newGroup.name){
            valid = false;
            $('#createGroupName').addClass('is-invalid');
        }

        if(newGroup.users.length === 0){
            valid = false;
            $('#createGroup-noUserError').css('display', 'flex');
        }

        if(valid){
            groups.push(newGroup);
            this.model.set('groups', groups);
            $('#createGroupModal').modal('hide');
            $('.modal-backdrop').remove();
            this.render();
        }
    },

    //Edit Group
    editGroupModal: function(){
        var index = $(event.target).attr('data-index');
        var group = this.model.get('groups')[index];
        this.model.set('selectedGroup', group);
        this.render();
        $('#editGroupModal').modal('show');
    },
    editGroupAddUser: function(){
        var name = $('#editGroup-selectUser').val();

        var users = model.get('users');
        var user = null;
        var i;
        for(i = 0; i < users.length; i++){
            if(users[i]['name'] == name){
                user = users[i];
                break;
            }
        }

        if(user){
            var tr = '<tr id="userRow-' + i + '" class="user-row"><td>' + user['name'] + 
            '</td> <td><button type="button" class="btn edit-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';

            if($("#userRow-" + user['userID']).length === 0){
                $('#selected-user-tbody').append(tr);    
            }

            //Clear the input
            $('#editGroup-selectUser').val('');
        }
    },
    editGroupDeleteUser: function(e){
        $(e.currentTarget).closest('tr').remove();
    },
    confirmEditGroup: function(){
        var selectedGroup = this.model.get('selectedGroup');
        var groups = this.model.get('groups');
        var users = this.model.get('users');

        var updateGroup = {
            groupID: selectedGroup['groupID'],
            name: $('#editGroupName').val(),
            users: []
        };

        $('.user-row').each(function(){
            updateGroup.users.push(users[$(this).attr('id').split('-')[1]]);
        });

        var valid = true;

        if(!updateGroup.name){
            valid = false;
            $('#editGroupName').addClass('is-invalid');
        }

        if(updateGroup.users.length === 0){
            valid = false;
            $('#editGroup-noUserError').css('display', 'flex');
        }

        if(valid){
            var i;
            for(i = 0; i < groups.length; i++){
                if(updateGroup.groupID == groups[i].groupID){    
                    break;
                }
            }

            groups[i] = updateGroup;

            this.model.set('groups', groups);
            $('#editGroupModal').modal('hide');
            $('.modal-backdrop').remove();
            this.render();
        }
    },

    //Projects functions
    starProject: function(){
        var index = $(event.target).attr('data-index');
        var projects = this.model.get('projects');
        var project = projects[index];

        var starred = (parseInt(project['starred']) + 1) % 2;
        project['starred'] = starred;

        projects[index] = project;

        this.model.set('projects', projects);
        this.render();
    },
    goToKanban: function(){
        if($(event.target)[0].nodeName !== 'BUTTON' && $(event.target)[0].nodeName !== 'SPAN'){
            console.log('Go to kanban board');
        }
    },
    editProject: function(){
        var index = $(event.target).attr('data-index');
        var project = this.model.get('projects')[index];
        this.model.set('selectedProject', project);
        console.log('Edit project');
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
var RouterProjects = Backbone.Router.extend({
    routes: {
        "projects": 'showProjects'
    },

    showProjects: function(){
        var fade = $.Deferred();
        
        //Set all the defaults to the model
        projectsViewPage.model.clear().set(projectsViewPage.model.defaults);

        $('#content').fadeOut(function(){
            fade.resolve();
            $('#content').html(projectsViewPage.render().el);
        })
    }
});

var projectsViewPage = null;
var projectsModelPage = null;
var projectsRouter = null;

projectsModelPage = new ModelProjects();
projectsViewPage = new ViewProjects({
    model: projectsModelPage,
    tagName: 'div'
});

projectsRouter = new RouterProjects();
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
                promise.resolve();
            });

            $(document).on('click', '.clockin-card', function(e){
                $(e.target).closest('button').toggleClass('active');
                console.log($(e.currentTarget).val());
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
var clockOutModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#clockOutModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="clockOutModalDiv"></div>';
            $('body').append(div);

            $('#clockOutModalDiv').append(Handlebars.partials.clockout_modal(model.toJSON()));

            $('#clockOutModal').modal('show');

            $('#clockOutModal').on('hidden.bs.modal', function(){
                $('#clockOutModalDiv').remove();
                promise.resolve();
            });

            $(document).on('input', '.clockout-progress-bar', function(e){
                //Change the associated textbox when change the progress bar
                var index = $(e.currentTarget).attr('id').split('-')[1];
                $('#clockOutModalProgressInput-' + index).val($(e.currentTarget).val());
            });

            $(document).on('keyup', '.clockout-progress-input', function(e){
                //Change the progress bar value when entering information into the associated textbox
                var value = $(e.currentTarget).val();

                //If not a number or outside of the range 0-100, error
                if(!parseInt(value) || value < 0 || value > 100){
                    $(e.currentTarget).addClass('is-invalid');
                } else {
                    $(e.currentTarget).removeClass('is-invalid');
                    var index = $(e.currentTarget).attr('id').split('-')[1];
                    $('#clockOutModalProgress-' + index).val(value);

                }
                
            });

            $(document).on('focus', '.clockout-progress-input.is-invalid', function(e){
                $(e.currentTarget).removeClass('is-invalid');
            });

            $(document).on('click', '#clockOutModalClockOut', function(e){
                //Save clock out
                var endedTasks = [];
                var valid = true;

                $('.clockout-card').each(function(){
                    var taskID = $(this).attr('data-taskid');

                    var task = {
                        taskID: taskID,
                        progress: $('#clockOutModalProgress-' + taskID).val(),
                        hours: $('#clockOutModalTimeSpent-' + taskID).val()
                    };

                    if($('#clockOutModalProgressInput-' + taskID).hasClass('is-invalid')){
                        valid = false;
                    }

                    endedTasks.push(task);
                    
                });

                if(valid){
                    model.set('clockedOut', true);
                    model.set('clockedOutTasks', endedTasks);
                    $('#clockOutModal').modal('hide');
                }
               
            });
            
        }

        return promise.promise();
    },

    close: function(){

        $('#clockOutModal').modal('hide');
        $('#clockOutModalDiv').remove();

    }
}

function clockOutModalOpen() {
    return $('#clockOutModalDiv').length > 0;
}