var ModelProjects = Backbone.Model.extend({
    defaults: {
        projects: [
            {
                projectID: 10293,
                name: 'Project 1',
                starred: 1,
                description: 'My first project',
                groups: [18949]
            },
            {
                projectID: 38893,
                name: 'Serious Project',
                starred: 1,
                description: 'This is a serious project for serious people',
                groups: [18949, 31829]
            },
            {
                projectID: 41882,
                name: 'Fun Project',
                starred: 0,
                description: 'Just for fun lol',
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