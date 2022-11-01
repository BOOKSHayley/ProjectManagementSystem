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
                promise.resolve();
            });
            
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