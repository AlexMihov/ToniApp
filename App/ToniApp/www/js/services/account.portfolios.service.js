angular.module('ToniApp.services')

.factory('AccountPortfolios', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var portfolios = [{
        id: 0,
        creator_id: 7,
        project_title: 'Marktplatz ToniApp',
        favorited:false,
        project_tags: 'Design, Konzept, Film',
        picture: 'img/portfolio/Pictures/Marktplatz_Projekt_logo.png',
        banner: [{
                    type: 'picture',
                    url: 'img/portfolio/Pictures/Marktplatz_Projekt_logo.png'
                }],
        paragraphs: [{
            title: 'Martkplatz ToniApp',
            content: 'Wie kann mehr Zusammenarbeit zwischen Studierenden der ZHdK gefördert werden? Der erste Schritt ist mit dem gemeinsamen Umzug ins Toni-Areal schon getan.'
        }, {
            title: '',
            content: 'Ich versuche, einen Schritt weiter zu gehen. Mit einem virtuellen Marktplatz in Form einer Mobile App sollen sich Studierende schnell und unkompliziert für gemeinsame Projekte finden. Dadurch erhoffe ich mir, das kreative Potenzial aller Studiengänge besser zusammenzuführen.'
        }, {
            title: '',
            content: 'In meiner Diplomarbeit konzipiere ich den Marktplatz für die ToniApp, zeige einen Prototypen und habe die Entstehungsgeschichte von der Idee bis zur Realisierung mit der Kamera begleitet.'
        }]
    }, {
        id: 1,
        creator_id: 7,
        project_title: 'Innen/Aussen',
        favorited:false,
        project_tags: 'Fotografie',
        picture: 'img/portfolio/Pictures/project_1.jpg',
        banner: [{
                    type: 'picture',
                    url: 'img/portfolio/Pictures/project_1.jpg'
                }],
        paragraphs: [{
            title: '',
            content: 'In einem Fotoprojekt in Vézelay Burgund arbeiteten wir während zwei Wochen an einem fotografischen Thema, welches mit Architektur zutun hatte. Innen und Aussenwelten flossen ineinander und liessen neue Räume entstehen.'
        }]
    }, {
        id: 2,
        creator_id: 7,
        project_title: 'Austellung im Feuerwehrdepo in Rapperswil',
        favorited:false,
        project_tags: 'Fotografie, Dokumentation',
        picture: 'img/portfolio/Pictures/project_2.jpg',
        banner: [{
                    type: 'picture',
                    url: 'img/portfolio/Pictures/project_2.jpg'
                }],
        paragraphs: [{
            title: '',
            content: 'Für meine Fotodokumentation „Lichtstreifen“ fotografierte ich mit einer analogen Spiegelreflexkamera während einer Woche Innenräume. Ich experimentierte mit verschiedenen  Lichtquellen. Im Fotolabor entwickelte ich meine Bilder und vergrösserte sie auf Grossformat.',
            media: {
                type: 'picture',
                url: ''
            }
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
