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
    }
});