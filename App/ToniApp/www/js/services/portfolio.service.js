angular.module('ToniApp.services')

.factory('Portfolios', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var portfolios = [{
        id: 0,
        creator_id: 7,
        project_title: 'Toni App',
        project_tags: 'Design, App, Toni',
        picture: 'http://i.imgur.com/ADK9LpZ.jpg',
        banner: {
            type: 'picture',
            url: 'http://i.imgur.com/ADK9LpZ.jpg'
        },
        paragraphs: [{
            title: '',
            content: 'Während meiner Studienzeit hat mir ein App, welches den Studienalltag am ToniAreal vereinfacht täglich gefehlt. Aus diesem Grund habe ich mir vorgenommen, als meine Bachelorarbeit das Design für ebendieses App zu entwerfen.'
        }, {
            title: 'Design',
            content: 'In vielen Iterationen habe ich ein initiales Design entworfen, welches meinen die verschiedenen Funktionen der zukünftigen ToniApp darstellen. Dieses wurde danach auf iPhone-grossen Kärtchen gedruckt und in meinen Befragungen verwendet.            Die Befragten mussten dabei die Karten in die Hand nehmen und die "App" bedienen als wäre es ein echtes Handy.'
        }, {
            title: 'Prototyp',
            content: 'Nach dem Testen mit den Kartonkärtchen wollte ich noch eine bessere Vorstellung erhalten, wie ein fertiges App funktionieren könnte. Daher habe ich mich nach einer Person umgesehen, welche über das nötige Know-How verfügt. Auf diese Weise habe ich Alex Mihov, einen Informatikstudent der ZHAW kennen gelernt und wir haben zusammen die App auf die Beine gestellt.'
        }]
    }, {
        id: 1,
        creator_id: 3,
        project_title: 'Innen/Aussen',
        project_tags: 'Fotografie',
        picture: 'img/portfolio/Picture/project_1.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Picture/project_1.jpg'
        },
        paragraphs: [{
            title: '',
            content: 'In einem Fotoprojekt in Vézelay Burgund arbeiteten wir während zwei Wochen an einem fotografischen Thema, welches mit Architektur zutun hatte. Innen und Aussenwelten flossen ineinander und liessen neue Räume entstehen.'
        }]
    }, {
        id: 2,
        creator_id: 2,
        project_title: 'Austellung im Feuerwehrdepo in Rapperswil',
        project_tags: 'Musik, Jazz',
        picture: 'img/portfolio/Picture/project_2.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Picture/project_2.jpg'
        },
        paragraphs: [{
            title: '',
            content: 'Für meine Fotdokumentation „ Lichtstreifen“ fotografierte ich mit einer analogen Spiegelreflexkamera während einer Woche Innenräume. Ich experimentierte mit verschiedenen  Lichtquellen. Im Fotolabor entwickelte ich meine Bilder und vergrösserte sie auf Grossformat.',
            media: {
                type: 'picture',
                url: ''
            }
        }]
    }, {
        id: 3,
        creator_id: 4,
        project_title: 'Schwarz ist mehr als eine Farbe',
        project_tags: 'Konzept, Kleidung',
        picture: 'img/portfolio/Picture/project_3.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Picture/project_3.jpg'
        },
        paragraphs: [{
            title: '',
            content: 'In einem interdisziplinären Modul  in Stile und Design untesuchten Jan, Fabienne und ich die Bedeutung der Farbe „ Schwarz „ in der Mode der letzten 100 Jahre.  Mit Recherchen und einer eigenen Dokumentation zur Bedeutung black fashion wanderte unsere Arbeit sogar nach Berlin, auf was wir natürlich sehr stolz sind.'
        }]
    }, {
        id: 4,
        creator_id: 5,
        project_title: 'Pop-Art Ausstellung',
        project_tags: 'Kunst, Pop-Art',
        picture: 'http://art-canyon.com/pop-art/wp-content/uploads/2010/08/james-dean-pop-art.jpg',
        banner: {
            type: 'picture',
            url: 'http://d1oi7t5trwfj5d.cloudfront.net/fe/08/fbd7e11241fd977d6f83e2f3a675/homer.jpg'
        },
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
        banner: {
            type: 'picture',
            url: 'http://d1oi7t5trwfj5d.cloudfront.net/fe/08/fbd7e11241fd977d6f83e2f3a675/homer.jpg'
        },
        paragraphs: [{
            title: '',
            content: ''
        }]
    }, {
        id: 6,
        creator_id: 1,
        project_title: 'Doh-Lock',
        project_tags: 'Konzept, Design',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'video',
            url: 'https://www.youtube.com/embed/PulHR2LfPVk'
        },
        paragraphs: [{
            title: '',
            content: 'Als langjährige Liebhaberin von den Simpsons, wollte ich umbedingt ein Produkt entwerfen, welches den Humor und Stil der Simpsons beinhaltet. Der Doh-Lock nimmt Homers beliebten Spruch und macht aus ihm ein einzigartiges Schloss, welches jeden zum Schmunzeln bringen wird.',
            media: {
                type: 'picture',
                url: ''
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
    }, {
        id: 7,
        creator_id: 8,
        project_title: 'Ringo',
        project_tags: 'Western, Film',
        picture: 'http://i.imgur.com/u8hiSPa.jpg',
        banner: {
            type: 'picture',
            url: 'http://d1oi7t5trwfj5d.cloudfront.net/fe/08/fbd7e11241fd977d6f83e2f3a675/homer.jpg'
        },
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
