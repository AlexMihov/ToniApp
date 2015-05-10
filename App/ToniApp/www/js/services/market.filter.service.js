angular.module('ToniApp.services')
    .factory('Filters', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var filters = [{
            id: 0,
            name: 'Filter 1',
            items: [{
                name: 'first Filter'
            }, {
                name: 'second Filter'
            }]
        }, {
            id: 1,
            name: 'Filter 2',
            items: [{
                name: 'first Filter'
            }]
        }, {
            id: 2,
            name: 'Filter 3',
            items: [{
                name: 'first Filter'
            }]
        }, {
            id: 3,
            name: 'Filter 4',
            items: [{
                name: 'first Filter'
            }]
        }, {
            id: 4,
            name: 'Filter 5',
            items: [{
                name: 'first Filter'
            }]
        }];

        return {
            getAll: function() {
                return filters;
            }
        };
    });
