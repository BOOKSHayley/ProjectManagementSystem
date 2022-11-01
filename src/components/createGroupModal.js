var createGroupModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#createGroupModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="createGroupModalDiv"></div>';
            $('body').append(div);

            var users = [
                {userID:1, name: 'Hayley Roberts'},
                {userID:2, name: 'Logan Lafauci'},
                {userID:3, name: 'Zack Faulkner'},
                {userID:4, name: 'Dean Compton'},
                {userID:5, name: 'Olivia Cheung'},
                {userID:6, name: 'Vaughn Ohlerking'},
            ];

            model.set('users', users);

            $('#createGroupModalDiv').append(Handlebars.partials.creategroup_modal(model.toJSON()));

            $('#createGroupModal').modal('show');

            $('#createGroupModal').on('hidden.bs.modal', function(){
                $('#createGroupModalDiv').remove();
                promise.resolve();
            });

            //Add user
            $(document).on('click', '#createGroupAddSelectedUser', function(){
                var name = $('#createGroup-selectUser').val();

                var users = model.get('users');
                var user = null;
                for(var i = 0; i < users.length; i++){
                    if(users[i]['name'] == name){
                        user = users[i];
                        break;
                    }
                }

                if(user){
                    var tr = '<tr id="userRow-' + user['userID'] + '" class="user-row"><td>' + user['name'] + 
                    '</td> <td><button type="button" class="btn create-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';
    
                    if($("#userRow-" + user['userID']).length === 0){
                        $('#selected-user-tbody').append(tr);    
                    }
    
                    //Clear the input
                    $('#createGroup-selectUser').val('');
                }

            });

            //Remove user
            $(document).on('click', '.create-group-delete-user', function(e){
                $(e.currentTarget).closest('tr').remove();
            });

            //Confirm create group
            $(document).on('click', '#confirmCreateGroup', function(){
                var newGroup = {
                    groupName: $('#createGroupName').val(),
                    users: []
                };

                $('.user-row').each(function(){
                    newGroup.users.push($(this).attr('id').split('-')[1]);
                });

                var valid = true;

                if(!newGroup.groupName){
                    valid = false;
                    $('#createGroupName').addClass('is-invalid');
                }

                if(newGroup.users.length === 0){
                    valid = false;
                    $('#createGroup-noUserError').css('display', 'flex');
                }

                if(valid){
                    model.set('newGroup', newGroup);
                    $('#createGroupModal').modal('hide');
                }

            });
            
        }

        return promise.promise();
    },

    close: function(){

        $('#createGroupModal').modal('hide');
        $('#createGroupModalDiv').remove();

    }
}

function createGroupModalOpen() {
    return $('#createGroupModalDiv').length > 0;
}