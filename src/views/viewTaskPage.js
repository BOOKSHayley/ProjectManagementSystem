var ViewTaskPage = Backbone.View.extend({
    events: {
        'click #sendComment': 'updateComments',
        'keyup #comment': 'enterComments',
        'click #openAssignModal': 'openAssignModal',
        'keyup #assignUsers-selectUser' : 'enterAssigned',
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
        var li = '<li class="list-group-item">Logan: '+cmt+'</li>';
        $("#commentLog").append(li);
        var log = {user: "Logan", comment: cmt};
        var messages = this.model.get("messages");
        messages.push(log);
        this.model.set("messages", messages);
        $("#comment").val("");
    },

    updateAssigned: function(){
        var newUser = $("#assignUsers-selectUser").val();
        var users = this.model.get("users");
        var addNewUser;
        var index;
        
        for(let i =0; i < users.length; i++)
        {
            if(newUser == users[i].name)
            {
                addNewUser = users[i];
                index = i;
                break;
            }
        }

        if(newUser != null){
            var tableEntry = '<tr class="assignUserRow" data-index="'+index+'"><td>'+addNewUser.name+'</td><td><button type="button" class="btn" id="deleteUserButton"><span class="material-icons" style="color: red">delete</span></button></td></tr>';
            $("#newAssignedUsers").append(tableEntry);
        }
        $("#assignUsers-selectUser").val("");
    },

    deleteUser: function(){
        $(event.target).closest("tr").remove();
    },

    confirmNewUsers: function(){
        var assigned = this.model.get("assigned");
        var users = this.model.get("users");
        var notAssigned = true;
        $(".assignUserRow").each(function(){
            for(let i = 0; i < assigned.length; i++)
            {
                if(assigned[i] == users[tmp])
                {
                    notAssigned=false;
                }
            }
            
            if(notAssigned)
            {
                var tmp = $(this).attr("data-index");
                assigned.push(users[tmp]);
            }
        });
        this.model.set("assigned", assigned);
        $("#assignModal").modal("hide");
        $(".modal-backdrop").remove();
        this.render();
    },

    enterComments: function(e){
        if(e.keyCode == 13){
            this.updateComments();
        }
    },

    enterAssigned: function(e){
        if(e.keyCode == 13){
            this.updateAssigned();
        }
    },

    openAssignModal: function(){
        $("#assignModal").modal("show");
    }
});