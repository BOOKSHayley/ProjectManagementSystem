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
        ],

        tasks:[
            {
                name: "Task 1",
                status: 3,
                progress: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                assignedUsers: [
                    {name: "User 1", userID: 7},
                    {name: "User 2", userID: 8},
                    {name: "User 3", userID: 9}
                ],
                timeLogged: "10h",
                finishDate: "11/18/2022",
                problems: [
                    "Problem 1",
                    "Problem 2",
                    "Problem 3",
                    "Problem 4",
                    "Problem 5"
                ],
                commentLog: [
                    {user: "User 1", comment: "Task started"},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "Task finished"}
                ]
            },
            {
                name: "Task 2",
                status: 2,
                progress: 85,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                assignedUsers: [
                    {name: "User 1", userID: 7},
                    {name: "User 2", userID: 8},
                    {name: "User 3", userID: 9}
                ],
                timeLogged: "6h",
                finishDate: "12/7/2022",
                problems: [
                    "Problem 1",
                    "Problem 2",
                    "Problem 3",
                    "Problem 4",
                    "Problem 5"
                ],
                commentLog: [
                    {user: "User 1", comment: "Task started"},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "Task finished"}
                ]
            },
            {
                name: "Task 3",
                status: 1,
                progress: 50,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                assignedUsers: [
                    {name: "User 1", userID: 7},
                    {name: "User 2", userID: 8},
                    {name: "User 3", userID: 9}
                ],
                timeLogged: "3h",
                finishDate: "12/7/2022",
                problems: [
                    "Problem 1",
                    "Problem 2",
                    "Problem 3",
                    "Problem 4",
                    "Problem 5"
                ],
                commentLog: [
                    {user: "User 1", comment: "Task started"},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "Task finished"}
                ]
            },
            {
                name: "Task 4",
                status: 1,
                progress: 25,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                assignedUsers: [
                    {name: "User 1", userID: 7},
                    {name: "User 2", userID: 8},
                    {name: "User 3", userID: 9}
                ],
                timeLogged: "4h",
                finishDate: "12/7/2022",
                problems: [
                    "Problem 1",
                    "Problem 2",
                    "Problem 3",
                    "Problem 4",
                    "Problem 5"
                ],
                commentLog: [
                    {user: "User 1", comment: "Task started"},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 2", comment: "..."},
                    {user: "User 1", comment: "Task finished"}
                ]
            },
            {
                name: "Task 5",
                status: 0,
                progress: 0,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                assignedUsers: [
                    {name: "User 1", userID: 7},
                ],
                timeLogged: "0h",
                finishDate: "12/7/2022",
                problems: [
                ],
                commentLog: [
                ]
            },
            {
                name: "Task 6",
                status: 0,
                progress: 0,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                assignedUsers: [
                ],
                timeLogged: "0h",
                finishDate: "12/7/2022",
                problems: [
                ],
                commentLog: [
                ]
            },
        ]
    },

    initialize: function(){
        
    }
});