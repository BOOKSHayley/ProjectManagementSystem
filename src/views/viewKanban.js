var ViewKanban = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #clickButton': 'clickButtonFunction',
        'click .task-button': 'showTaskModal',
        'click #navTimer': 'navTimer',
        'click #testButton': 'showCreateTask',
        'click #assignUserButton' : 'updateAssigned',
        'click .create-task-delete-user': 'createTaskModalRemoveUser',
        'click #createTask': 'createTask'
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
          var project = e;
          self.model.set('project', project);

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
            '" class="createtask-user-row" data-userid = "'+user["userID"]+'"><td style="width: 90%">' +
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

    createTask: function(){
        var projName = this.model.get('projectName');
        var project = this.model.get('project');
        console.log(project);

        var newTask = {
            assignedusers : [],
            commentLog :[],
            description : $('#description').val(),
            finishDate : $('#taskFinishDate').val(),
            name : $('#taskName').val(),
            problems : [],
            progress: 0,
            status: 0,
            taskID: Object.values(project.Tasks).length+1,
            timeLogged: "0h"
        };

        $(".createtask-user-row").each(function(){
            var user = {
                userID: $(this).attr("data-userid"),
                name: $(this).text()
            };
            newTask.assignedusers.push(user);
        });

        if(newTask.name == ""){
            $('#taskName').addClass("is-invalid");
        }
        else{
            project.Tasks["task" + newTask.taskID] = newTask;
            $("#createTaskModal").modal("hide");
            $(".modal-backdrop").remove();
            patchDatabase('projects/' + projName + "/Tasks/task" + newTask.taskID, newTask);
            this.render();
        }

        
    },

    showCreateTask: function(){
        $("#createTaskModal").modal("show");
    },
});