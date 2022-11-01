var editGroupModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#editGroupModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="editGroupModalDiv"></div>';
            $('body').append(div);

           var group = {
                groupName: 'My group',
                users: [
                    {userID:1, name: 'Hayley Roberts'},
                    {userID:2, name: 'Logan Lafauci'}
                ]
           };

           var users = [
                {userID:1, name: 'Hayley Roberts'},
                {userID:2, name: 'Logan Lafauci'},
                {userID:3, name: 'Zack Faulkner'},
                {userID:4, name: 'Dean Compton'},
                {userID:5, name: 'Olivia Cheung'},
                {userID:6, name: 'Vaughn Ohlerking'},
            ];

            model.set('group', group);
            model.set('users', users);

            $('#editGroupModalDiv').append(Handlebars.partials.editgroup_modal(model.toJSON()));

            $('#editGroupModal').modal('show');

            $('#editGroupModal').on('hidden.bs.modal', function(){
                $('#editGroupModalDiv').remove();
                promise.resolve();
            });

            //Add user
            $(document).on('click', '#editGroupAddSelectedUser', function(){
                var name = $('#editGroup-selectUser').val();

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
                    '</td> <td><button type="button" class="btn edit-group-delete-user"><span class="material-icons" style="color: red">delete</span></button></td></tr>';
    
                    if($("#userRow-" + user['userID']).length === 0){
                        $('#selected-user-tbody').append(tr);    
                    }
    
                    //Clear the input
                    $('#editGroup-selectUser').val('');
                }

            });

            //Remove user
            $(document).on('click', '.edit-group-delete-user', function(e){
                $(e.currentTarget).closest('tr').remove();
            });

            //Confirm edit group
            $(document).on('click', '#confirmEditGroup', function(){
                var updateGroup = {
                    groupName: $('#editGroupName').val(),
                    users: []
                };

                $('.user-row').each(function(){
                    updateGroup.users.push($(this).attr('id').split('-')[1]);
                });

                var valid = true;

                if(!updateGroup.groupName){
                    valid = false;
                    $('#editGroupName').addClass('is-invalid');
                }

                if(updateGroup.users.length === 0){
                    valid = false;
                    $('#editGroup-noUserError').css('display', 'flex');
                }

                if(valid){
                    model.set('updateGroup', updateGroup);
                    $('#editGroupModal').modal('hide');
                }

            });
            
        }

        return promise.promise();
    },

    close: function(){

        $('#editGroupModal').modal('hide');
        $('#editGroupModalDiv').remove();

    }
}

function editGroupModalOpen() {
    return $('#editGroupModalDiv').length > 0;
}