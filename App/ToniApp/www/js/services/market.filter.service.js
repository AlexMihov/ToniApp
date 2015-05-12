angular.module('ToniApp.services')
    .factory('Filters', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var filters = [{
            id: 0,
            active: false,
            name: 'Darstellende Künste und Film',
            items: [{
                name: 'first Filter'
            }, {
                name: 'second Filter'
            }]
        }, {
            id: 1,
            active: false,
            name: 'Design',
            items: [{
                name: 'Cast / Audiovisuelle Medien'
            },{
                name: 'Game Design'
            },{
                name: 'Industrial Design'
            },{
                name: 'Interaction Design'
            },{
                name: 'Scientific Visualisation'
            },{
                name: 'Style & Design'
            },{
                name: 'Visuelle Kommunikation'
            },]
        }, {
            id: 2,
            active: false,
            name: 'Kulturanalysen und Vermittlung',
            items: [{
                name: 'first Filter'
            }]
        }, {
            id: 3,
            active: false,
            name: 'Kunst & Medien',
            items: [{
                name: 'first Filter'
            }]
        }, {
            id: 4,
            active: false,
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
