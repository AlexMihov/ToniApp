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
                name: 'DDE'
            },{
                active: true,
                isDivider: false,
                name: 'CAST/Audiovisuelle Medien'
            },{
                active: true,
                isDivider: false,
                name: 'Game Design'
            },{
                active: true,
                isDivider: false,
                name: 'Industrial Design'
            },{
                active: true,
                isDivider: false,
                name: 'Interaction Design'
            },{
                active: true,
                isDivider: false,
                name: 'Scientific Visualisation'
            },{
                active: true,
                isDivider: false,
                name: 'Style & Design'
            },{
                active: true,
                isDivider: false,
                name: 'Visuelle Kommunikation'
            } ,{
                active: true,
                isDivider: true,
                name: 'DDK'
            } ,{
                active: true,
                isDivider: false,
                name: 'Film'
            } ,{
                active: true,
                isDivider: false,
                name: 'Tanz'
            } ,{
                active: true,
                isDivider: false,
                name: 'Theater'
            } ,{
                active: true,
                isDivider: true,
                name: 'DKM'
            } ,{
                active: true,
                isDivider: false,
                name: 'Bildende Kunst'
            } ,{
                active: true,
                isDivider: false,
                name: 'Fotografie'
            } ,{
                active: true,
                isDivider: false,
                name: 'Mediale Künste'
            } ,{
                active: true,
                isDivider: true,
                name: 'DKV'
            } ,{
                active: true,
                isDivider: false,
                name: 'Art Education'
            } ,{
                active: true,
                isDivider: true,
                name: 'DMU'
            } ,{
                active: true,
                isDivider: false,
                name: 'Jazz & Pop'
            } ,{
                active: true,
                isDivider: false,
                name: 'Kirchenmusik'
            } ,{
                active: true,
                isDivider: false,
                name: 'Klassik'
            } ,{
                active: true,
                isDivider: false,
                name: 'Komposition'
            } ,{
                active: true,
                isDivider: false,
                name: 'Musik und Bewegun'
            } ,{
                active: true,
                isDivider: false,
                name: 'Schulmusik'
            } ,{
                active: true,
                isDivider: false,
                name: 'Tonmeister'
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
