var ModelProjects = Backbone.Model.extend({
    defaults: {
        projects: [
            {
                projectID: 10293,
                name: 'PiM',
                starred: 1,
                description: 'PiM is the group project for CSC 4243 to create a project management system. Our goal is to create an intuitive software capable of competing with other project management systems.',
                groups: [18949]
            },
            {
                projectID: 38893,
                name: 'Operation Spark',
                starred: 1,
                description: 'Op Spark is a software bootcamp to create a personal portfolio.',
                groups: [18949, 31829]
            },
            {
                projectID: 41882,
                name: 'Dispark',
                starred: 0,
                description: 'An intuitive park management system for facility managers to track their parks.',
                groups: [21943]
            }
        ],
        groups: [
            {
                groupID: 18949,
                name: 'My first group',
                users: [
                    {userID: 1, name: 'Hayley Roberts', initials: 'HR'},
                    {userID: 2, name: 'Logan Lafauci', initials: 'LL'},
                    {userID: 3, name: 'Zack Faulkner', initials: 'ZF'},
                    {userID: 5, name: 'Olivia Cheung', initials: 'OC'},
                    {userID: 6, name: 'Vaughn Ohlerking', initials: 'VO'},
                ]
            },
            {
                groupID: 31829,
                name: 'Work group',
                users: [
                    {userID: 3, name: 'Zack Faulkner', initials: 'ZF'},
                    {userID: 5, name: 'Olivia Cheung', initials: 'OC'},
                    {userID: 6, name: 'Vaughn Ohlerking', initials: 'VO'},
                    {userID: 4, name: 'Dean Compton', initials: 'DC'}
                ]
            },
            {
                groupID: 21943,
                name: 'Fun group',
                users: [
                    {userID: 1, name: 'Hayley Roberts', initials: 'HR'},
                    {userID: 5, name: 'Olivia Cheung', initials: 'OC'},
                ]
            }
        ],
        users: [
            {userID:1, name: 'Hayley Roberts', initials: 'HR'},
            {userID:2, name: 'Logan Lafauci', initials: 'LL'},
            {userID:3, name: 'Zack Faulkner', initials: 'ZF'},
            {userID:4, name: 'Dean Compton', initials: 'DC'},
            {userID:5, name: 'Olivia Cheung', initials: 'OC'},
            {userID:6, name: 'Vaughn Ohlerking', initials: 'VO'},
        ]
    },

    initialize: function(){
        
    }
});