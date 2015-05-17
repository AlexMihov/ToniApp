angular.module('ToniApp.services')

.factory('Portfolios', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var portfolios = [{
        id: 0,
        creator_id: 1,
        project_title: 'Doh-Lock',
        project_tags: 'Konzept, Design',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        paragraphs: [{
            title: '',
            content: 'Als langjährige Liebhaberin von den Simpsons, wollte ich umbedingt ein Produkt entwerfen, welches den Humor und Stil der Simpsons beinhaltet. der Doh-Lock nimmt Homers beliebten Spruch und macht aus ihm ein einzigartiges Schloss, welches jeden zum Schmunzeln bringen wird.',
            media :{
                type: 'picture',
                url: ''
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
    }, {
        id: 1,
        creator_id: 3,
        project_title: 'Luzerner Bier Redesign',
        project_tags: 'Grafik',
        picture: 'http://www.wineware.co.uk/content/images/thumbs/0010058_schott-zwiesel-beer-basic-small-beer-glasses-set-of-6.jpeg',
        paragraphs: [{
            title: '',
            content: 'asdasdasd'
        }]
    }, {
        id: 2,
        creator_id: 2,
        project_title: 'Jazz Konzert',
        project_tags: 'Musik, Jazz',
        picture: 'http://www.audiophileusa.com/covers400water/23108.jpg',
        paragraphs: [{
            title: '',
            content: 'asdasdasdasd',
            media :{
                type: 'picture',
                url: ''
            }
        }]
    }, {
        id: 3,
        creator_id: 4,
        project_title: 'Mode Kollektion',
        project_tags: 'Konzept, Kleidung',
        picture: 'http://fashionsup.com/wp-content/uploads/2012/05/how-to-draw-fashion-sketches.jpg',
        paragraphs: [{
            title: '',
            content: 'asdasdasdas'
        }]
    }, {
        id: 4,
        creator_id: 5,
        project_title: 'Pop-Art Ausstellung',
        project_tags: 'Kunst, Pop-Art',
        picture: 'http://art-canyon.com/pop-art/wp-content/uploads/2010/08/james-dean-pop-art.jpg',
        paragraphs: [{
            title: '',
            content: ''
        }]
    }, {
        id: 5,
        creator_id: 6,
        project_title: 'Retro Werbung',
        project_tags: 'Film, Werbung, Retro',
        picture: 'https://www.tradebit.com/usr/beulah/pub/9002/8552600_332smx.jpg',
        paragraphs: [{
            title: '',
            content: ''
        }]
    }, {
        id: 6,
        creator_id: 7,
        project_title: 'Ballet Abend',
        project_tags: 'Tanzen, Ballet',
        picture: 'http://bachtrack.com/files/1097-1498-marianela_nunez_and_thiago_soares_in_swan_lake._photo_alice_pennefather__courtesy_of_roh.jpg',
        paragraphs: [{
            title: '',
            content: ''
        }]
    }, {
        id: 7,
        creator_id: 8,
        project_title: 'Ringo',
        project_tags: 'Western, Film',
        picture: 'http://i.imgur.com/u8hiSPa.jpg',
        paragraphs: [{
            title: '',
            content: ''
        }]
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
