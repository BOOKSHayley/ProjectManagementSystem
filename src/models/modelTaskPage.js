var ModelTaskPage = Backbone.Model.extend({
    defaults: {
        messages:[
            {user: "User 1", comment: "Task started"},
            {user: "User 2", comment: "..."},
            {user: "User 1", comment: "..."},
            {user: "User 2", comment: "..."},
            {user: "User 2", comment: "..."},
            {user: "User 1", comment: "Task finished"}
        ],

        users:[
            {name: "Logan Lafauci", ID: "1"},
            {name: "Zack Faulkner", ID: "2"},
            {name: "Hayley Roberts", ID: "3"},
            {name: "Olivia Cheung", ID: "4"},
            {name: "Dean Compton", ID: "5"},
            {name: "Vaughn Ohlerking ", ID: "6"}
        ],

        assigned:[
            {name: "User 1", ID: "7"},
            {name: "User 2", ID: "8"},
            {name: "User 3", ID: "9"}
        ]
    },

    initialize: function(){
        
    }
});