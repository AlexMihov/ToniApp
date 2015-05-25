angular.module('ToniApp.services')
    .factory('Filters', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var filters = [{
            id: 1,
            name: 'Interessen',
            items: [{
                active: true,
                isDivider: false,
                name: 'Fotografie'
            }, {
                active: true,
                isDivider: false,
                name: 'Geschichte'
            }, {
                active: true,
                isDivider: false,
                name: 'Animation'
            }, {
                active: true,
                isDivider: false,
                name: 'Schmuck'
            }, {
                active: true,
                isDivider: false,
                name: 'Graffiti'
            }, {
                active: true,
                isDivider: false,
                name: 'Skulptur'
            }, {
                active: true,
                isDivider: false,
                name: 'Schauspiel'
            }, ]
        }, {
            id: 2,
            name: 'Studiengänge',
            items: [{
                active: true,
                isDivider: true,
                name: 'Design'
            },{
                active: true,
                isDivider: false,
                name: 'Cast'
            },{
                active: true,
                isDivider: false,
                name: 'Interaction Design'
            },{
                active: true,
                isDivider: true,
                name: 'Kunst'
            },{
                active: true,
                isDivider: false,
                name: 'Fotografie'
            },{
                active: true,
                isDivider: false,
                name: 'Bildhauerei'
            }]
        },{
            id: 3,
            name: 'Zeitraum',
            items: []
        }];

        return {
            getAll: function() {
                return filters;
            },
            get: function(filterID) {
                for (var i = 0; i < filters.length; i++) {
                    if (filters[i].id == filterID) {
                        return filters[i];
                    }
                }
                return [];
            }
        };
    });
