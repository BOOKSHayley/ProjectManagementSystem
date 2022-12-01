var ModelCreateProject = Backbone.Model.extend({
    defaults: {
        counter: 0
    },

    initialize: function(){
        
    }
});
var ModelDashboard = Backbone.Model.extend({
  defaults: {
    counter: 0,
    starredProjects: [
      {
        projectID: 1,
        projectName: "PiM",
        description:
          "PiM is the group project for CSC 4243 to create a project management system. Our goal is to create an intuitive software capable of competing with other project management systems.",
        timeSpent: 54,
        starred: 1,
      },
      {
        projectID: 2,
        projectName: "Operation Spark",
        description:
          "Op Spark is a software bootcamp to create a personal portfolio.",
        timeSpent: 32,
        starred: 1,
      },
      {
        projectID: 3,
        projectName: "Dispark",
        description:
          "An intuitive park management system for facility managers to track their parks.",
        timeSpent: 12,
        starred: 0,
      },
    ],
  },

  initialize: function () {},
});

var ModelExample = Backbone.Model.extend({
    defaults: {
        counter: 0
    },

    initialize: function(){
        
    }
});
var ModelKanban = Backbone.Model.extend({
    defaults: {
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
        projects: [],
        groups: [],
        users: []
    },

    initialize: function(){
        
    }
});
var ModelTaskPage = Backbone.Model.extend({
    defaults: {
        
    },

    initialize: function(){
        
    }
});
var ViewCreateProject = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #cancel': 'cancel',
        'click #submit': 'submit',
    },

    initialize: function(){

    },
    cancel: function(){
        window.location.href = '#projects';
    },
    submit: function(){
        window.location.href = '#projects';
    },

    render: function(){
        this.$el.html(Handlebars.templates.createProject(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },
});
var ViewDashboard = Backbone.View.extend({
  events: {
    //Events include: click, keyup, change, etc
    "click #clickButton": "clickButtonFunction",
    "click #taskModalOpen": "taskModalOpen",
  },

  initialize: function () {},

  getData: function () {
    var self = this;
    var promise = $.Deferred();

    const res = fetchData("projects");
    res.then((e) => {
      const a = Object.values(e);
      self.model.set("starredProjects", a);
      console.log(a);
      promise.resolve();
    });

    return promise.promise();
  },

  render: function () {
    var self = this;

    this.$el.html(Handlebars.templates.dashboard(this.model.toJSON()));

    //Can add functions to be run on rendering can go here

    patchDatabase("users/VO1", {
      userID: 6,
      name: "Vaughn Ohlerking",
      initials: "VO",
    });

    $.when(fade).done(function () {
      $("#content").fadeIn();
    });

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
var ViewKanban = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction',
        'click .task-button': 'showTaskModal',
        'click #navTimer': 'navTimer',
        'click #testButton': 'showCreateTask',
        'click #assignUserButton' : 'updateAssigned',
        "click .create-task-delete-user": "createTaskModalRemoveUser",
    },

    initialize: function(){
    },

    render: function(){
        this.$el.html(Handlebars.templates.Kanban(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    showTaskModal: function(e){
        var taskID = $(e.currentTarget).attr('data-taskid');
        var tasks = this.model.get('project')['Tasks'];
        var task = null;

        for(const [key, value] of Object.entries(tasks)){
            if(value['taskID'] == taskID){
                task = value;
                break;
            }
        }

        this.model.set('currentTask', task);
        taskModal.open(this.model);
    },
    navTimer: function(){
        if(this.model.get('clockedIn')){
            clockOutModal.open(this.model);
        }else{
            clockInModal.open(this.model);
        }
    },
    
    getData: function(){
      var self = this;

      var promise = $.Deferred();

      const db = fetchData("projects/" + self.model.get('projectName'));
      db.then((e)=> {
          var projects = Object.values(e);
          var project = null;
          for(var i = 0; i < projects.length; i++){
              if(projects[i]['projectID'] == projectID){
                  project = projects[i];
                  break;
              }
          }

          self.model.set('project', project);

          var projectUsers = [];
          var j = 0;
          for(var i = 0; i < project.groups.length; i++){
            const group = fetchData("groups/g" + project.groups[i]);
            group.then((e)=>{
                projectUsers = projectUsers.concat(e.users);
                projectUsers.filter((item,index)=>{
                    return (projectUsers.indexOf(item) == index)
                 })

                j++;
                if(j >= project.groups.length-1) {
                    self.model.set('projectUsers', projectUsers);
                    promise.resolve();
                }
            })
          }
      });

      return promise.promise();
    },

    createTaskModalRemoveUser: function (e) {
        $(e.currentTarget).closest("tr").remove();
    },

    updateAssigned: function(){
        var name = $("#assignUsers-selectUser").val();

        var users = this.model.get("projectUsers");
        var user = null;
        var i;

        for (i = 0; i < users.length; i++) {
          if (users[i]["name"] == name) {
            user = users[i];
            break;
          }
        }
        
        if (user) {
          var tr =
            '<tr id="createTaskUserRow-' +
            i +
            '" class="createtask-user-row"><td style="width: 90%">' +
            user["name"] +
            '</td> <td><button type="button" class="btn create-task-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';
            
          if ($("#createTaskUserRow-" + i).length === 0) {
            
            $("#createtask-select-user-tbody").append(tr);
          }
    
          //Clear the input
          $("#assignUsers-selectUser").val("");
        }

        return false;
    },

    showCreateTask: function(){
        $("#createTaskModal").modal("show");
    },
});
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
var ViewProjects = Backbone.View.extend({
  events: {
    "click #addGroup": "addGroupModal",
    "click #createGroupAddSelectedUser": "createGroupAddSelectedUser",
    "click .create-group-delete-user": "createGroupModalRemoveUser",
    "click #confirmCreateGroup": "confirmAddGroup",
    "click .edit-group": "editGroupModal",
    "click #editGroupAddSelectedUser": "editGroupAddUser",
    "click .edit-group-delete-user": "editGroupDeleteUser",
    "click #confirmEditGroup": "confirmEditGroup",
    "click .project-star": "starProject",
    "click .project-section": "goToKanban",
    "click .edit-project": "editProject",
    "keyup #groupSearch": "groupSearch",
    "keyup #projectSearch": "projectSearch",
  },

  initialize: function () {},

  getProjData: function () {
    var self = this;
    var promise = $.Deferred();

    const res = fetchData("");
    res.then((e) => {
      const a = Object.values(e);
      self.model.set("projects", a[1]);
      self.model.set("groups", a[0]);
      self.model.set("users", a[2]);
      //            gets last user
      console.log(Object.values(a[2])[Object.values(a[2]).length - 1]);
      promise.resolve();
    });

    return promise.promise();
  },

  render: function () {
    this.$el.html(Handlebars.templates.projects(this.model.toJSON()));

    //Can add functions to be run on rendering can go here

    $.when(fade).done(function () {
      $("#content").fadeIn();
    });

    this.delegateEvents();
    return this;
  },

  groupSearch: function () {
    var searchKey = $("#groupSearch").val().toLowerCase();

    $(".group-part").each(function () {
      if ($(this).attr("data-name").toLowerCase().includes(searchKey)) {
        $(this).css("display", "initial");
      } else {
        $(this).css("display", "none");
      }
    });
  },
  projectSearch: function () {
    var searchKey = $("#projectSearch").val().toLowerCase();

    $(".project-section").each(function () {
      var projName = $(this).find(".project-name").text().toLowerCase();
      var projDesc = $(this).find(".project-desc").text().toLowerCase();

      if (projName.includes(searchKey) || projDesc.includes(searchKey)) {
        $(this).css("display", "inherit");
      } else {
        $(this).css("display", "none");
      }
    });
  },

  //Add Group
  addGroupModal: function () {
    $("#createGroupModal").modal("show");
  },
  createGroupAddSelectedUser: function () {
    var name = $("#createGroup-selectUser").val();

    var users = this.model.get("users");
    var user = null;
    var userKey;
    
    for (const [key, value] of Object.entries(users)) {
        if (value["name"] == name) {
            user = value;
            userKey = key;
            break;
        }
    }

    if (user) {
      var tr =
        '<tr id="createGroupUserRow-' +
        userKey +
        '" class="creategroup-user-row"><td style="width: 90%">' +
        user["name"] +
        '</td> <td><button type="button" class="btn create-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';

      if ($("#createGroupUserRow-" + userKey).length === 0) {
        $("#creategroup-select-user-tbody").append(tr);
      }

      //Clear the input
      $("#createGroup-selectUser").val("");
    }
  },
  createGroupModalRemoveUser: function (e) {
    $(e.currentTarget).closest("tr").remove();
  },
  confirmAddGroup: function () {
    var self = this;
    var groups = this.model.get("groups");
    var users = this.model.get("users");

    var newGroup = {
        groupID: Math.floor(Math.random() * 10000),
        name: $("#createGroupName").val(),
        users: [],
    };
  
    $(".creategroup-user-row").each(function () {
        newGroup.users.push(users[$(this).attr("id").split("-")[1]]);
    });

    var valid = true;

    if (!newGroup.name) {
        valid = false;
        $("#createGroupName").addClass("is-invalid");
    }

    if (newGroup.users.length === 0) {
        valid = false;
        $("#createGroup-noUserError").css("display", "flex");
    }

    if (valid) {
        groups['g' + newGroup.groupID] = newGroup;
        self.model.set("groups", groups);

        patchDatabase('groups/g' + newGroup.groupID, newGroup);

        $("#createGroupModal").modal("hide");
        $(".modal-backdrop").remove();
        self.render();
    }
    
  },

  //Edit Group
  editGroupModal: function () {
    var groupID = $(event.target).attr("data-groupid");
    var group = this.model.get("groups")['g' + groupID];
    this.model.set("selectedGroup", group);
    this.render();
    $("#editGroupModal").modal("show");
  },
  editGroupAddUser: function () {
    var name = $("#editGroup-selectUser").val();
    var users = this.model.get("users");
    var user = null;
    var userKey;

    for (const [key, value] of Object.entries(users)) {
        if (value["name"] == name) {
            user = value;
            userKey = key;
            break;
        }
    }

    if (user) {
      var tr =
        '<tr id="editGroupUserRow-' +
        userKey +
        '" class="editgroup-user-row"><td style="width: 90%">' +
        user["name"] +
        '</td> <td><button type="button" class="btn edit-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';

      if ($("#editGroupUserRow-" + userKey).length === 0) {
        $("#editgroup-selected-user-tbody").append(tr);
      }

      //Clear the input
      $("#editGroup-selectUser").val("");
    }
  },
  editGroupDeleteUser: function (e) {
    $(e.currentTarget).closest("tr").remove();
  },
  confirmEditGroup: function () {
    var selectedGroup = this.model.get("selectedGroup");
    var groups = this.model.get("groups");
    var users = this.model.get("users");

    var updateGroup = {
      groupID: selectedGroup["groupID"],
      name: $("#editGroupName").val(),
      users: [],
    };

    $(".editgroup-user-row").each(function () {
      var user = users[$(this).attr("id").split("-")[1]];
      updateGroup.users.push(user);
    });

    var valid = true;

    if (!updateGroup.name) {
      valid = false;
      $("#editGroupName").addClass("is-invalid");
    }

    if (updateGroup.users.length === 0) {
      valid = false;
      $("#editGroup-noUserError").css("display", "flex");
    }

    if (valid) {
      groups['g' + updateGroup.groupID] = updateGroup;

      this.model.set("groups", groups);

      patchDatabase('groups/g' + updateGroup.groupID, updateGroup);

      $("#editGroupModal").modal("hide");
      $(".modal-backdrop").remove();
      this.render();
    }
  },

  //Projects functions
  starProject: function () {
    var projName = $(event.target).attr("data-projectname");
    var projects = this.model.get("projects");
    var project = projects[projName];

    var starred = (parseInt(project["starred"]) + 1) % 2;
    project["starred"] = starred;

    projects[projName] = project;

    this.model.set("projects", projects);
    patchDatabase('projects/' + projName, project);
    this.render();
  },
  goToKanban: function(e){
        if($(event.target)[0].nodeName !== 'BUTTON' && $(event.target)[0].nodeName !== 'SPAN'){
            projectName = $(e.currentTarget).attr('data-project');
            window.location.href = '#kanban/' + projectName;
        }
  },
  editProject: function () {
    var index = $(event.target).attr("data-index");
    var project = this.model.get("projects")[index];
    this.model.set("selectedProject", project);
    console.log("Edit project");
  },
});

var ViewTaskPage = Backbone.View.extend({
    events: {
        'click #sendComment': 'updateComments',
        'submit #comment-form': 'updateComments',
        'click #openAssignModal': 'openAssignModal',
        'submit #addUserForm': 'updateAssigned',
        'change #addUser': 'updateAssigned',
        'click #assignUserButton': 'updateAssigned',
        'click #deleteUserButton': 'deleteUser',
        'click #confirmUsers': 'confirmNewUsers',
        'click #navTimer': 'navTimer'
    },

    initialize: function(){

    },

    render: function(){
        this.$el.html(Handlebars.templates.taskPage(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    updateComments: function(){
        var cmt = $("#comment").val();
        if(cmt != ""){
            var li = '<li class="list-group-item">Logan: '+cmt+'</li>';
            $("#commentLog").append(li);
            var log = {user: "Logan", comment: cmt};
            var messages = this.model.get("messages");
            messages.push(log);
            this.model.set("messages", messages);
            $("#comment").val("");
        }
        return false;
    },

    updateAssigned: function(){
        var newUser = $("#assignUsers-selectUser").val();
        var users = this.model.get("users");
        var assigned = this.model.get("assigned");
        var alreadyAssigned = false;
        var addNewUser;
        var index;

        if(newUser != ''){
            for(let i = 0; i < users.length; i++)
            {
                if(newUser == users[i].name)
                {
                    addNewUser = users[i];
                    index = i;
                    break;
                }
            }

            for(let i = 0; i < assigned.length; i++){
                if(addNewUser.userID == assigned[i].userID){
                    alreadyAssigned = true;
                }
            }

            if(addNewUser && $('.assignUserRow[data-user ="'+addNewUser.userID+'"]').length === 0 && !alreadyAssigned){
                var tableEntry = '<tr class="assignUserRow" data-index="' + index +'" data-user="'+addNewUser.userID+'"><td>'+addNewUser.name+'</td><td><button type="button" class="btn" id="deleteUserButton"><span class="material-icons" style="color: red">delete</span></button></td></tr>';
                $("#newAssignedUsers").append(tableEntry);
                $("#assignUsers-selectUser").val("");
            } else if(alreadyAssigned){
                $('#assignUserError').css('display', 'block');
                window.setTimeout(function(){
                    $('#assignUserError').css('display', 'none');
                }, 2000);
            }

        }

        return false;
    },

    deleteUser: function(){
        $(event.target).closest("tr").remove();
    },

    confirmNewUsers: function(){
        var assigned = this.model.get("assigned");
        var users = this.model.get("users");
        var notAssigned = true;
        $(".assignUserRow").each(function(){
            var tmp = $(this).attr("data-index");
            assigned.push(users[tmp]);
        });
        this.model.set("assigned", assigned);
        $("#assignModal").modal("hide");
        $(".modal-backdrop").remove();
        this.render();
    },

    openAssignModal: function(){
        $("#assignModal").modal("show");
    },

    navTimer: function(){
        if(this.model.get('clockedIn')){
            clockOutModal.open(this.model);
        } else {
            clockInModal.open(this.model);
        }
    },

    getData: function(){
        var self = this;
        var promise = $.Deferred();

        var projectName = self.model.get('projectName');
        var taskID = self.model.get('taskID');

        var db = fetchData('projects/' + projectName);
        db.then((e)=>{
            var tasks = e['Tasks'];
            var task = null;

            for(const [key, value] of Object.entries(tasks)){
                if(value['taskID'] == taskID){
                    task = value;
                    break;
                }
            }

            self.model.set('project', e);
            self.model.set('task', task);
            promise.resolve();
        });


        return promise.promise();
    }
});
var RouterCreateProject = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this createProject page to appear
        "createProject": 'showCreateProject',
      
    },

    showCreateProject: function(){
        var fade = $.Deferred();

        

       // Set all the defaults to the model
        createProjectViewPage.model.clear().set(createProjectViewPage.model.defaults);

        $('#content').fadeOut(function(){
            fade.resolve();
            $('#content').html(createProjectViewPage.render().el);
        })
    }
});
var createProjectViewPage = null;
var createProjectModelPage = null;
var createProjectRouter = null;

createProjectModelPage = new ModelCreateProject();
createProjectViewPage = new ViewCreateProject({
    model: createProjectModelPage,
    tagName: 'div'
});

createProjectRouter = new RouterCreateProject();
var RouterDashboard = Backbone.Router.extend({
  routes: {
    // These are urls that will trigger this dashboard page to appear
    dashboard: "showDashboard",
  },

  showDashboard: function () {
    var fade = $.Deferred();

    // console.log("here");

    //Set all the defaults to the model
    dashboardViewPage.model.clear().set(dashboardViewPage.model.defaults);

    dashboardViewPage.getData().done(function () {
      $("#content").fadeOut(function () {
        fade.resolve();
        $("#content").html(dashboardViewPage.render().el);
      });
    });
  },
});

var dashboardViewPage = null;
var dashboardModelPage = null;
var dashboardRouter = null;

dashboardModelPage = new ModelDashboard();
dashboardViewPage = new ViewDashboard({
  model: dashboardModelPage,
  tagName: "div",
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
var RouterKanban = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this kanban page to appear
        "kanban/:projectName": 'showKanban'
    },

    showKanban: function(projectName){
        var fade = $.Deferred();


        //Set all the defaults to the model
        kanbanViewPage.model.clear().set(kanbanViewPage.model.defaults);
        kanbanViewPage.model.set('projectName', projectName)

        var clockedIn = localStorage.getItem('clockedIn');
        if(clockedIn){
            kanbanViewPage.model.set('clockedIn', JSON.parse(clockedIn));
        }

        kanbanViewPage.getData().done(function(){
            $('#content').fadeOut(function(){
                fade.resolve();
                $('#content').html(kanbanViewPage.render().el);
            })
        })
        
    }
});

var kanbanViewPage = null;
var kanbanModelPage = null;
var kanbanRouter = null;

kanbanModelPage = new ModelKanban();
kanbanViewPage = new ViewKanban({
    model: kanbanModelPage,
    tagName: 'div'
});

kanbanRouter = new RouterKanban();
var RouterLogin = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this login page to appear
        "login": 'showLogin'
    },

    showLogin: function(){
        var fade = $.Deferred();

        //Set all the defaults to the model
        loginViewPage.model.clear().set(loginViewPage.model.defaults);

        localStorage.setItem('clockedIn', JSON.stringify(false));
        
        loginViewPage.getData().done(function () {
            $("#content").fadeOut(function () {
                fade.resolve();
                $("#content").html(loginViewPage.render().el);
            });
        });
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
    projects: "showProjects",
  },

  showProjects: function () {
    var fade = $.Deferred();

    //Set all the defaults to the model
    projectsViewPage.model.clear().set(projectsViewPage.model.defaults);

    projectsViewPage.getProjData().done(function () {
      $("#content").fadeOut(function () {
        fade.resolve();
        $("#content").html(projectsViewPage.render().el);
      });
    });
  },
});

var projectsViewPage = null;
var projectsModelPage = null;
var projectsRouter = null;

projectsModelPage = new ModelProjects();
projectsViewPage = new ViewProjects({
  model: projectsModelPage,
  tagName: "div",
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

var RouterTaskPage = Backbone.Router.extend({
    routes: {
        // These are urls that will trigger this example page to appear
        "taskPage/:projectName/:taskID": 'showTaskPage'
    },

    showTaskPage: function(projectName, taskID){
        var fade = $.Deferred();

        //Set all the defaults to the model
         taskViewPage.model.clear().set(taskViewPage.model.defaults);
         taskViewPage.model.set('projectName', projectName);
         taskViewPage.model.set('taskID', taskID);

         var clockedIn = localStorage.getItem('clockedIn');
        if(clockedIn){
            taskViewPage.model.set('clockedIn', JSON.parse(clockedIn));
        }
        
        taskViewPage.getData().done(function(){
            $('#content').fadeOut(function(){
                fade.resolve();
                $('#content').html(taskViewPage.render().el);
            })
        });
    }
});

var taskViewPage = null;
var taskModelPage = null;
var taskRouter = null;

taskModelPage = new ModelTaskPage();
taskViewPage = new ViewTaskPage({
    model: taskModelPage,
    tagName: 'div'
});

taskRouter = new RouterTaskPage();
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


                localStorage.setItem('clockedIn', JSON.stringify(true));
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
                    localStorage.setItem('clockedIn', JSON.stringify(false));
                    model.set('clockedIn', false);
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
const address = "https://project-i-management-default-rtdb.firebaseio.com/";

async function fetchData(dir) {
  let response = await fetch(address + dir + ".json");
  data = await response.json();
  return data;
}
// example call of the above function
// fill in the needed name / domain

// const res = fetchData("User/Dean");
// res.then((e) => {
//   const a = Object.values(e)[0];
//   this.$el.html("<h1>" + a.pw + "</h1>");
//   console.log(a);
// });

function postDatabase(dir, data) {
  // adds user
  fetch(address + dir + ".json", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
function patchDatabase(dir, data) {
  fetch(address + dir + ".json", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function delFromDatabase(dir) {
  // needs work
  fetch(address + dir + ".json", {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(Object.values(data));
    });
}
function addUser(data) {
  return postDatabase("Users", data);
}

var taskModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#taskModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="taskModalDiv"></div>';
            $('body').append(div);
            
            var users = [
                "User 1",
                "User 2"
            ];
            model.set("users", users);

            $('#taskModalDiv').append(Handlebars.partials.taskmodal(model.toJSON()));

            $('#taskModal').modal('show');

            $('#taskModal').on('hidden.bs.modal', function(){
                $('#taskModalDiv').remove();
                promise.resolve();
            });
            

            $(document).on("click", "#viewTaskPage", function(){
                $('#taskModal').modal('hide');
                window.location.href="#taskPage";
            })

            $(document).on("click", "#claimTask", function(){
                var userClaim = '<h6>-User 3</h6>';
                $("#userList").append(userClaim);
                var currentUser = "User 3";
                users.push(currentUser);
                model.set("users", users);
                $("#claimTask").css("display", "none");
            })
        }

        return promise.promise();
    },

    close: function(){

        $('#taskModal').modal('hide');
        $('#taskModalDiv').remove();

    }
}

function taskModalOpen() {
    return $('#taskModalDiv').length > 0;
}