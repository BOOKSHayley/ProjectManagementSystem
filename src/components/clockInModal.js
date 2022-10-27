var clockInModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#clockInModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="clockInModalDiv"></div>';
            $('body').append(div);

            $('#clockInModalDiv').append(Handlebars.partials.clockin_modal(model.toJSON()));

            $('#clockInModal').modal('show');

            $('#clockInModal').on('hidden.bs.modal', function(){
                $('#clockInModalDiv').remove();
                promise.resolve();
            });

            $(document).on('click', '.clockin-card', function(e){
                $(e.target).closest('button').toggleClass('active');
            });

            $(document).on('click', '#clockInModalClockIn', function(e){
                //Save clock in
                var selectedTasks = [];

                $('.clockin-card.active').each(function(){
                    selectedTasks.push($(this).attr('data-taskid'));
                });


                model.set('clockedIn', true);
                model.set('clockedInTasks', selectedTasks);
                $('#clockInModal').modal('hide');
            });
            
        }

        return promise.promise();
    },

    close: function(){

        $('#clockInModal').modal('hide');
        $('#clockInModalDiv').remove();

    }
}

function clockInModalOpen() {
    return $('#clockInModalDiv').length > 0;
}