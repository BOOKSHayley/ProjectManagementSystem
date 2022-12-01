var taskModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#taskModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="taskModalDiv"></div>';
            $('body').append(div);

            $('#taskModalDiv').append(Handlebars.partials.taskmodal(model.toJSON()));

            $('#taskModal').modal('show');

            $('#taskModal').on('hidden.bs.modal', function(){
                $('#taskModalDiv').remove();
                $(document).off('click', '#claimTask');
                promise.resolve();
            });
            

            $(document).on("click", "#viewTaskPage", function(){
                $('#taskModal').modal('hide');
                window.location.href="#taskPage";
            })

            $(document).on("click", "#claimTask", function(){
                var currentUser = model.get("currentUser");
                var projName = model.get('projectName');
                var currentTask = model.get('currentTask');

                var assignedUsers = currentTask.assignedUsers;
                var userClaim = '<h6>-'+currentUser.name+'</h6>';
                $("#userList").append(userClaim);

                assignedUsers.push({name:currentUser.name, userID:currentUser.userID});
                patchDatabase('projects/' + projName + "/Tasks/task" + currentTask.taskID, currentTask);
                $("#claimTask").css("display", "none");
            })
        }

        return promise.promise();
    },

    close: function(){
        $(document).off('click', '#claimTask');
        $('#taskModal').modal('hide');
        $('#taskModalDiv').remove();

    }
}

function taskModalOpen() {
    return $('#taskModalDiv').length > 0;
}