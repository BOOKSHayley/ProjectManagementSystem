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
                //var currentUser = ;
                //var userClaim = '<h6>-'++'</h6>';
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