var ViewCreateProject = Backbone.View.extend({
    events: {
        //Events include: click, keyup, change, etc
        'click #cancel': 'cancel',
        'click #submit': 'submit',
        'click #addGroup': 'addGroup',
        'click .delete-group': 'deleteGroup',
        'focus #groupSelect': 'hideError',
        'focus .is-invalid': 'clearError'
    },

    initialize: function(){

    },

    addGroup: function(){
        var index = $('#groupSelect').val();

        if(index){
            var group = this.model.get('groups')[index];
            var tr = '<tr class="add-group-row" data-groupid="' + group['groupID'] + '"><td>' + group['name'] + '</td><td>' + 
            '<button type="button" class="btn delete-group"><span class="material-icons" style="color: red">delete</span></button></td></tr>';
            $('#addGroupTbody').append(tr);

            $('#addGroupTable').css('display', 'table');
        } else {
            $('#groupError').css('display', 'block');
        }
        
    },
    cancel: function(){
        window.location.href = '#projects';
    },
    clearError: function(){
        $(event.target).removeClass('is-invalid');
    },
    deleteGroup: function(){
        $(event.target).closest('tr').remove();
    },
    hideError: function(){
        $('#groupError').css('display', 'none');
    },
    submit: function(){
        var newProject = {
            Tasks: [], 
            description: $('#projectDescription').val(), 
            groups: [], 
            name: $('#projectName').val(), 
            projectID: Math.floor(Math.random() * 10000), 
            starred: 0, 
            timeSpent: 0
        }

        $('.add-group-row').each(function(){
            newProject.groups.push($(this).attr('data-groupid'));
        });

        var valid = true;

        if(newProject.name == '' || newProject.name.includes(' ')){
            $('#projectName').addClass('is-invalid');
            valid = false;
        } 

        if(newProject.groups.length === 0){
            $('#groupError').css('display', 'block');
            valid = false;
        }
        
        if(valid){
            patchDatabase('projects/' + newProject['name'], newProject).done(function(){
                window.location.href = '#projects';
            });
        }

    },

    render: function(){
        this.$el.html(Handlebars.templates.createProject(this.model.toJSON()));

        //Can add functions to be run on rendering can go here

        $.when(fade).done(function(){
            $('#content').fadeIn();
        })

        this.delegateEvents();
        return this;
    },

    getData: function(){
        var self = this; 
        var promise = $.Deferred(); 
        const res = fetchData("groups"); 
        res.then((e)=> {
            self.model.set("groups", Object.values(e));
            promise.resolve(); 
        })

        return promise.promise();

       
    }
});