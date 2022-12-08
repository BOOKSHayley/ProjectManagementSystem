var ViewTaskPage = Backbone.View.extend({
    events: {
        'click #sendComment': 'updateComments',
        'submit #comment-form': 'updateComments',
        'click #openAssignModal': 'openAssignModal',
        'submit #addUserForm': 'updateAssigned',
        'change #addUser': 'updateAssigned',
        'click #assignUserButton': 'updateAssigned',
        'click .deleteUserButton': 'deleteUser',
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
        var task = this.model.get("task");
        var cmtLog = this.model.get("task").commentLog;
        var cmt = $("#comment").val();
        var currentUser = this.model.get("currentUser");
        var projName = this.model.get("projectName");

        if(!cmtLog){
            cmtLog = [];
        }

        if(cmt != ""){
            var li = '<li class="list-group-item">' +currentUser.name+ ': ' +cmt+ '</li>';
            $("#commentLog").append(li);
            var log = {user: currentUser.name, comment: cmt};
            cmtLog.push(log);
            task.commentLog = cmtLog;

            patchDatabase('projects/' + projName + "/Tasks/task" + task.taskID, task);
            $("#comment").val("");

            this.model.set('task', task);
        }
        return false;
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
            '<tr id="assignUserRow-' +
            i +
            '" class="assign-user-row" data-userid = "'+user["userID"]+'"><td style="width: 90%">' +
            user["name"] +
            '</td> <td><button type="button" class="btn deleteUserButton"><span class="material-icons" style="color: red">delete</span></button></td></tr>';
            
          if ($("#assignUserRow-" + i).length === 0) {
            
            $("#assign-select-user-tbody").append(tr);
          }
    
          //Clear the input
          $("#assignUsers-selectUser").val("");
        }

        return false;
    },

    deleteUser: function(){
        $(event.target).closest("tr").remove();
    },

    confirmNewUsers: function(){
        var assigned = this.model.get("task").assignedUsers;
        var users = this.model.get("projectUsers");

        if(!assigned){
            assigned = [];
        }

        var newAssigned = [];
        $(".assign-user-row").each(function(){
            var tmp = $(this).attr("data-userid");
            for(var i = 0; i < users.length; i++){
                if(users[i].userID == tmp){
                    newAssigned.push({name: users[i].name, userID: users[i].userID});
                }
            }
        });

        newAssigned = assigned.concat(newAssigned);
        newAssigned = newAssigned.filter((value, index, self)=>
            index === self.findIndex((t) => (
                t.name === value.name && t.UserID === value.UserID
            ))
        )

        var task = this.model.get("task");
        var projName = this.model.get("projectName");
        task.assignedUsers = newAssigned;
        patchDatabase('projects/' + projName + "/Tasks/task" + task.taskID, task);
        this.model.set("task", task);

        
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
            var project = e;
            var tasks = project['Tasks'];
            var task = null;

            for(const [key, value] of Object.entries(tasks)){
                if(value['taskID'] == taskID){
                    task = value;
                    break;
                }
            }
            self.model.set('project', project);
            self.model.set('task', task);

            var projectUsers = [];
            var j = 0;
            for(var i = 0; i < project.groups.length; i++){
            const group = fetchData("groups/g" + project.groups[i]);
            group.then((e)=>{
                projectUsers = projectUsers.concat(e.users);
                projectUsers = projectUsers.filter((value, index, self)=>
                    index === self.findIndex((t) => (
                        t.name === value.name && t.UserID === value.UserID
                    ))
                )

                j++;
                if(j >= project.groups.length-1) {
                    self.model.set('projectUsers', projectUsers);
                    promise.resolve();
                }
            })
            }
        });


        return promise.promise();
    }
});