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
            {name: "Logan Lafauci", userID: "1"},
            {name: "Zack Faulkner", userID: "2"},
            {name: "Hayley Roberts", userID: "3"},
            {name: "Olivia Cheung", userID: "4"},
            {name: "Dean Compton", userID: "5"},
            {name: "Vaughn Ohlerking ", userID: "6"}
        ],

        assigned:[
            {name: "User 1", userID: "7"},
            {name: "User 2", userID: "8"},
            {name: "User 3", userID: "9"}
        ]
    },

    initialize: function(){
        
    }
});