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
        'click .edit-project': 'editProject',
        'keyup #groupSearch': 'groupSearch',
        'keyup #projectSearch': 'projectSearch'
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

    groupSearch: function(){
        var searchKey = $("#groupSearch").val().toLowerCase();

        $('.group-part').each(function(){
            if($(this).attr('data-name').toLowerCase().includes(searchKey)){
                $(this).css('display', 'initial');
            } else {
                $(this).css('display', 'none');
            }
        });
    },
    projectSearch: function(){
        var searchKey = $('#projectSearch').val().toLowerCase();

        $('.project-section').each(function(){
            var projName = $(this).find('.project-name').text().toLowerCase();
            var projDesc = $(this).find('.project-desc').text().toLowerCase();

            if(projName.includes(searchKey) || projDesc.includes(searchKey)){
                $(this).css('display', 'inherit');
            } else {
                $(this).css('display', 'none');
            }
        });
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
            var tr = '<tr id="createGroupUserRow-' + i + '" class="creategroup-user-row"><td style="width: 90%">' + user['name'] + 
            '</td> <td><button type="button" class="btn create-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';

            if($("#createGroupUserRow-" + i).length === 0){
                $('#creategroup-select-user-tbody').append(tr);    
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

        $('.creategroup-user-row').each(function(){
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
            var tr = '<tr id="editGroupUserRow-' + users[i]['userID'] + '" class="editgroup-user-row"><td style="width: 90%">' + user['name'] + 
            '</td> <td><button type="button" class="btn edit-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';

            if($("#editGroupUserRow-" + users[i]['userID']).length === 0){
                $('#editgroup-selected-user-tbody').append(tr);    
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

        $('.editgroup-user-row').each(function(){
            var user;
            for(var i = 0; i < users.length; i++){
                if(users[i]['userID'] == $(this).attr('id').split('-')[1]){
                    user = users[i];
                    break;
                }
            }
            updateGroup.users.push(user);
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