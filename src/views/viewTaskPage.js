var ViewTaskPage = Backbone.View.extend({
    events: {
        'click #sendComment': 'updateComments',
        'keyup #comment': 'enterComments',
        'click #openAssignModal': 'openAssignModal'
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

    enterComments: function(e){
        if(e.keyCode == 13){
            this.updateComments();
        }
    },

    openAssignModal: function(){
        $("#assignModal").modal("show");
    }
});