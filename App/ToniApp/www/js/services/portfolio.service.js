angular.module('ToniApp.services')

.factory('Portfolios', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var portfolios = [{
        id: 0,
        creator_id: 1,
        project_title: 'Doh-Lock',
        project_tags:'Konzept, Design',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png'
    }, {
        id: 1,
        creator_id: 3,
        project_title: 'Luzerner Bier Redesign',
        project_tags:'Grafik',
        picture: 'http://www.wineware.co.uk/content/images/thumbs/0010058_schott-zwiesel-beer-basic-small-beer-glasses-set-of-6.jpeg'
    }, {
        id: 2,
        creator_id: 2,
        project_title: 'Jazz Konzert',
        project_tags:'Musik, Jazz',
        picture: 'http://www.audiophileusa.com/covers400water/23108.jpg'
    }, {
        id: 3,
        creator_id: 4,
        project_title: 'Mode Kollektion',
        project_tags:'Konzept, Kleidung',
        picture: 'http://fashionsup.com/wp-content/uploads/2012/05/how-to-draw-fashion-sketches.jpg'
    }, {
        id: 4,
        creator_id: 5,
        project_title: 'Pop-Art Ausstellung',
        project_tags:'Kunst, Pop-Art',
        picture: 'http://art-canyon.com/pop-art/wp-content/uploads/2010/08/james-dean-pop-art.jpg'
    }, {
        id: 5,
        creator_id: 6,
        project_title: 'Retro Werbung',
        project_tags:'Film, Werbung, Retro',
        picture: 'https://www.tradebit.com/usr/beulah/pub/9002/8552600_332smx.jpg'
    }, {
        id: 6,
        creator_id: 7,
        project_title: 'Ballet Abend',
        project_tags:'Tanzen, Ballet',
        picture: 'http://bachtrack.com/files/1097-1498-marianela_nunez_and_thiago_soares_in_swan_lake._photo_alice_pennefather__courtesy_of_roh.jpg'
    }, {
        id: 7,
        creator_id: 8,
        project_title: 'Ringo',
        project_tags:'Western, Film',
        picture: 'http://i.imgur.com/u8hiSPa.jpg'
    }];

    return {
        getAll: function() {
            return portfolios;
        },
        remove: function(chat) {
            portfolios.splice(portfolios.indexOf(chat), 1);
        },
        get: function(portfolioId) {
            for (var i = 0; i < portfolios.length; i++) {
                if (portfolios[i].id === parseInt(portfolioId)) {
                    return portfolios[i];
                }
            }
            return null;
        }
    };
})
