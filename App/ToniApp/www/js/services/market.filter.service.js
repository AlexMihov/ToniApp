angular.module('ToniApp.services')
    .factory('Filters', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var filters = [{
            id: 1,
            name: 'Interessen',
            items: [{
                active: true,
                name: 'Fotografie'
            }, {
                active: true,
                name: 'Geschichte'
            }, {
                active: true,
                name: 'Animation'
            }, {
                active: true,
                name: 'Schmuck'
            }, {
                active: true,
                name: 'Graffiti'
            }, {
                active: true,
                name: 'Skulptur'
            }, {
                active: true,
                name: 'Schauspiel'
            }, ]
        }, {
            id: 2,
            active: false,
            name: 'Kulturanalysen und Vermittlung',
            items: [{
                active: false,
                name: 'first Filter'
            }]
        }, {
            id: 3,
            active: false,
            name: 'Kunst & Medien',
            items: [{
                active: false,
                name: 'first Filter'
            }]
        }, {
            id: 4,
            active: false,
            name: 'Filter 5',
            items: [{
                active: false,
                name: 'first Filter'
            }]
        }];

        return {
            getAll: function() {
                return filters;
            },
            get: function(filterID){
                for(var i=0; i<filters.length; i++){
                    if(filters[i].id == filterID){
                        return filters[i];
                    }
                }
                return [];
            }
        };
    });
