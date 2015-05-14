angular.module('ToniApp.services')
    .factory('Filters', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var filters = [{
            id: 0,
            active: false,
            name: 'Darstellende Künste und Film',
            items: [{
                active: false,
                name: 'first Filter'
            }, {
                active: false,
                name: 'second Filter'
            }]
        }, {
            id: 1,
            active: false,
            name: 'Design',
            items: [{
                active: false,
                name: 'Cast / Audiovisuelle Medien'
            }, {
                active: false,
                name: 'Game Design'
            }, {
                active: false,
                name: 'Industrial Design'
            }, {
                active: false,
                name: 'Interaction Design'
            }, {
                active: false,
                name: 'Scientific Visualisation'
            }, {
                active: false,
                name: 'Style & Design'
            }, {
                active: false,
                name: 'Visuelle Kommunikation'
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
            }
        };
    });
