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
        picture: 'img/portfolio/Pictures/project_1.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_1.jpg'
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
        picture: 'img/portfolio/Pictures/project_2.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_2.jpg'
        },
        paragraphs: [{
            title: '',
            content: 'Für meine Fotodokumentation „Lichtstreifen“ fotografierte ich mit einer analogen Spiegelreflexkamera während einer Woche Innenräume. Ich experimentierte mit verschiedenen  Lichtquellen. Im Fotolabor entwickelte ich meine Bilder und vergrösserte sie auf Grossformat.',
            media: {
                type: 'picture',
                url: ''
            }
        }]
    }, {
        id: 3,
        creator_id: 4,
        project_title: 'Schwarz ist mehr als eine Farbe',
        project_tags: 'Kleidung',
        picture: 'img/portfolio/Pictures/project_3.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_3.jpg'
        },
        paragraphs: [{
            title: 'Schwarz ist mehr als eine Farbe',
            content: 'In einem interdisziplinären Modul  in Style & Design untesuchten Jan, Fabienne und ich die Bedeutung der Farbe „ Schwarz „ in der Mode der letzten 100 Jahre.  Mit Recherchen und einer eigenen Dokumentation zur Bedeutung black fashion wanderte unsere Arbeit sogar nach Berlin, auf was wir natürlich sehr stolz sind.'
        }]
    }, {
        id: 4,
        creator_id: 5,
        project_title: 'Birds',
        project_tags: 'Film',
        picture: 'img/portfolio/Pictures/project_4.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_4.jpg'
        },
        paragraphs: [{
            title: 'Birds',
            content: 'Für unseren Krimi-Kurzlfim „ birds“ , eine Anlehnung an Hitchkock ,drehten wir vor allem an den Ufern des Zürichsees. Das Krimidrama handelt von Janez, einem passlosen Slowenier, der von Halluzinationen geplagt immer wieder Dinge sah, die einmal Wirklichkeit waren. Sein zweites ich lebte in einer anderen Zeit.'
        }]
    }, {
        id: 5,
        creator_id: 6,
        project_title: 'Schnipp Schnapp',
        project_tags: 'Bild, Fotografie',
        picture: 'img/portfolio/Pictures/project_5.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_5.jpg'
        },
        paragraphs: [{
            title: 'Schnipp Schnapp',
            content: 'In unserem letzten Z- Modul zum Thema „ Wahrnehmung“ untersuchten wir die selektive Wahrnehmung von Bildern. Wir verglichen Schnappschüsse und analysierten verborgene Inhalte. '
        }]
    }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
    }, {
        id: 7,
        creator_id: 8,
        project_title: 'Vom Element zum System',
        project_tags: 'Objekt, Körper',
        picture: 'img/portfolio/Pictures/project_7.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_7.jpg'
        },
        paragraphs: [{
            title: 'Vom Element zum System',
            content: 'In diesen Workshop wurden aus  simplen Objeken, wie Wäscheklammern,  Fadenspulen, durch neue Anordnungen und Kombinationen skurrile Welten erschafft und fotografisch festgehalten. Körper und Raumgefüge waren einem ständigen Veränderungsprozess unterworfen.'
        }]
    }, {
        id: 8,
        creator_id: 1,
        project_title: 'Paper Fashion',
        project_tags: 'Mode, Papier, Fotoshooting',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_8.jpg'
        },
        paragraphs: [{
            title: 'Paper Fashion',
            content: 'In diesem Wochen Modul  in Stile und Design erlernten wir die verschiedensten Paierbearbeitungstechniken wie Wabetechnik, Knüllen, Schneiden, Falten... Wir machten Materialproben,
gestalterische Experimente und entwickelten schlussendlich einen Prototypen. 
Anhand von Schneiderpuppen wurden unsere Ideen
konkret umgesetzt und in einem Fotoshooting abgerundet.',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_8.jpg'
            }
        }, {
            title: '',
            content: ''
        }]
            }, {
        id: 9,
        creator_id: 1,
        project_title: 'Kleider machen Musik',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_9.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Endlich ist es soweit. Nadia und ich haben’s es geschafft!! Unser Modeprojekt „ Modekollektion zum Thema Klang“ aus Aluminium, Acrylglas und Seide , kann nun doch noch, nach langem Proben und Bangen, realisiert werden. Wir freuen uns auf euch. Morgen 6. Juni. 2015. Ausstellung im Raum 4K.22.',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_9.jpg'
            }
        }, {
            title: '',
            content: ''
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
        }]
            }, {
        id: 6,
        creator_id: 1,
        project_title: 'Bildlügen oder betrügerische Absichten',
        project_tags: 'Analyse, Bild',
        picture: 'http://2.bp.blogspot.com/-y8yEusAKcUM/TaoLBwfTQpI/AAAAAAAABAw/rHpOeL4OFMY/s1600/homer-simpson.png',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_6.jpg'
        },
        paragraphs: [{
            title: 'Bildlügen oder betrügerische Absichten',
            content: 'Beim Hausräumen von Andreas Grossmutter fanden wir Schachteln voll mit Postkarten der 20er 30er und 40er Jahre.  Wie inventarisierten, ordneten nach Kriterien analysierten und untersuchten manipuliertes Material hin zu neuen Bildaussagen.  ',
            media: {
                type: 'picture',
                url: 'img/portfolio/Pictures/project_6.jpg'
            }
        }, {
            title: 'Paragraph Nr2',
            content: 'Dies ist nun ein zweiter, sehr wichtiger Abschnitt, da ich noch mehr testen muss. Ich will sehen, ob das Programm alle Paragraphen dynamisch anzeigt.'
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
