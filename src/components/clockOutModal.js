var clockOutModal = {
    open: function(model){
        var promise = $.Deferred();

        if($('#clockOutModalDiv').length > 0){
            promise.resolve();
        } else {

            var div = '<div id="clockOutModalDiv"></div>';
            $('body').append(div);

            $('#clockOutModalDiv').append(Handlebars.partials.clockout_modal(model.toJSON()));

            $('#clockOutModal').modal('show');

            $('#clockOutModal').on('hidden.bs.modal', function(){
                $('#clockOutModalDiv').remove();
                promise.resolve();
            });

            $(document).on('input', '.clockout-progress-bar', function(e){
                var index = $(e.currentTarget).attr('id').split('-')[1];
                $('#clockOutModalProgressInput-' + index).val($(e.currentTarget).val());
            });

            $(document).on('keyup', '.clockout-progress-input', function(e){
                var value = $(e.currentTarget).val();

                if(!parseInt(value) || value < 0 || value > 100){
                    $(e.currentTarget).addClass('is-invalid');
                } else {
                    $(e.currentTarget).removeClass('is-invalid');
                    var index = $(e.currentTarget).attr('id').split('-')[1];
                    $('#clockOutModalProgress-' + index).val(value);

                }
                
            });

            $(document).on('focus', '.clockout-progress-input.is-invalid', function(e){
                $(e.currentTarget).removeClass('is-invalid');
            });

            $(document).on('click', '#clockOutModalClockOut', function(e){
                //Save clock out
                var selectedTasks = [];

                $('.clockin-card.active').each(function(){
                    selectedTasks.push($(this).attr('data-taskid'));
                });


                model.set('clockedOut', true);
                model.set('clockedOutTasks', selectedTasks);
                $('#clockOutModal').modal('hide');
            });
            
        }

        return promise.promise();
    },

    close: function(){

        $('#clockOutModal').modal('hide');
        $('#clockOutModalDiv').remove();

    }
}

function clockOutModalOpen() {
    return $('#clockOutModalDiv').length > 0;
}