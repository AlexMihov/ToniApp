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
            content: 'Für unseren Krimi-Kurzfilm „Birds“, eine Anlehnung an Hitchkock, drehten wir vor allem an den Ufern des Zürichsees. Das Krimidrama handelt von Janez, einem passlosen Slowenier, der von Halluzinationen geplagt immer wieder Dinge sah, die einmal Wirklichkeit waren. Sein zweites ich lebte in einer anderen Zeit.'
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
        picture: 'img/portfolio/Pictures/project_6.jpg',
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
        picture: 'img/portfolio/Pictures/project_8.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_8.jpg'
        },
        paragraphs: [{
            title: 'Paper Fashion',
            content: 'In diesem Wochen Modul  in Stile und Design erlernten wir die verschiedensten Paierbearbeitungstechniken wie Wabetechnik, Knüllen, Schneiden, Falten... Wir machten Materialproben, gestalterische Experimente und entwickelten schlussendlich einen Prototypen. Anhand von Schneiderpuppen wurden unsere Ideen konkret umgesetzt und in einem Fotoshooting abgerundet.',
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
        picture: 'img/portfolio/Pictures/project_9.jpg',
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
        id: 10,
        creator_id: 8,
        project_title: 'Blickkontakte',
        project_tags: 'Fotografie',
        picture: 'img/portfolio/Pictures/project_10.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_10.jpg'
        },
        paragraphs: [{
            title: 'Blickkontakte',
            content: 'Z-Modul 10.- 17 .September 2014. Gemeinsam erkundeten wir ihren Weg, versuchten immer mehr uns ihnen anzunähern. Geduld war gefordert. Über Stunden harrten wir im Dickicht mit unserer Sony a7s Kamera.'
        }]
    }, {
        id: 11,
        creator_id: 7,
        project_title: 'Künstlerinterwiews',
        project_tags: 'Interview, Video, Moderation',
        picture: 'img/portfolio/Pictures/project_11.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_11.jpg'
        },
        paragraphs: [{
            title: 'Künstlerinterwiews',
            content: '„Swiss Design ist eine Balance zwischen Materialien und Ideologie“ von Adam Brody. Werkstattgespräche zum Thema „ Schweizer Design“ mit Stardesigner   Brody. Martin, Hanna und ich moderierten im Rahmen der Weltdesigntage Zürich. Eine Filmdokumentation.'
        }]
    }, {
        id: 12,
        creator_id: 7,
        project_title: 'Natura Morta',
        project_tags: 'Installation, Gesaltung',
        picture: 'img/portfolio/Pictures/project_12.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_12.jpg'
        },
        paragraphs: [{
            title: 'Natura Morta',
            content: 'Es wurden Stimmungsbilder skizzenhaft umgesetzt und in einem Abstraktionsprozess weiterentwickelt, vergrössert und in Spachteltechnik auf 4 x 5 Meter Leinwand übertragen und gestalterisch umgesetzt.'
        }]
    }, {
        id: 13,
        creator_id: 7,
        project_title: 'Projekt in der Casa D‘Aglieri in Rimini - „Film der 60iger Jahre“',
        project_tags: 'Szenografie, Film',
        picture: 'img/portfolio/Pictures/project_13.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_13.jpg'
        },
        paragraphs: [{
            title: 'Projekt in der Casa D‘Aglieri in Rimini - „Film der 60iger Jahre“',
            content: 'In einem Schuppen der Residenz konnten alte Filmrequisiten aus Fellini Zeiten wiederbelebt werden. Wir inszenierten Szenen der 60iger Jahren und bauten auf einem riesigen Areal reale und surreale Situationen und Installationen. '
        }]
    }, {
        id: 14,
        creator_id: 7,
        project_title: 'Schuhe heute - Schuhe gestern',
        project_tags: 'Werbung, Mode, Dokumentation',
        picture: 'img/portfolio/Pictures/project_14.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_14.jpg'
        },
        paragraphs: [{
            title: 'Schuhe heute - Schuhe gestern',
            content: 'In dieser Fotodokumentation zum Thema Werbung der Schuhmode untersuchte ich Stil- und Gestaltungsmittel und erstellte eine 40 seitige Fotodokumentation, welche ich in der Finearts Gallerie in Krienz ausstellen konnte. '
        }]
    }, {
        id: 15,
        creator_id: 7,
        project_title: 'Concerto Lago',
        project_tags: 'Konzert, Klassik',
        picture: 'img/portfolio/Pictures/project_15.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_15.jpg'
        },
        paragraphs: [{
            title: 'Concerto Lago',
            content: 'Mit Nina und Valerie organisierte ich ein Open-Air Sommerkonzert am unteren Zürichsee. Zusammen mit Studierenden des Departements Klassik spielten wir Werke von F. M. Bartoly und A. Bruggner. Am 01.06.2014 spielten wir im Kollegium Musicum ausgewählte Werke von Stravinski, Bergolesi und Rebell. '
        }]
    }, {
        id: 16,
        creator_id: 7,
        project_title: 'Jubiliäumsabend',
        project_tags: 'Kammermusik, Konzert',
        picture: 'img/portfolio/Pictures/project_16.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_16.jpg'
        },
        paragraphs: [{
            title: 'Jubiliäumsabend',
            content: 'Zum 100. Geburtstag von Alexander Kurinova organisierte ich ein Kammermusik-Abend im Zeichen russischer Musik. Es war eine Zusammenarbeit mit dem Strawinski Konservatorium Petersburg.'
        }]
    }, {
        id: 17,
        creator_id: 7,
        project_title: 'Christian Wolf',
        project_tags: 'Komposition',
        picture: 'img/portfolio/Pictures/project_17.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_17.jpg'
        },
        paragraphs: [{
            title: 'Christian Wolf',
            content: 'Mit dem Komponisten Christian Wolf bearbeiteten wir sein Werk zusammen mit Studierenden  der Hochschule Luzern und dem Austerlitzer Knabenchor aus Innsbruck.'
        }]
    }, {
        id: 18,
        creator_id: 7,
        project_title: 'Kinder machen Kunst',
        project_tags: 'Kinder, Kunst',
        picture: 'img/portfolio/Pictures/project_18.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_18.jpg'
        },
        paragraphs: [{
            title: 'Kinder machen Kunst',
            content: 'Mit Cyril und Rea konnte ich ein weiteres Mal eine Kinderkunstwoche realisieren. Es gab 3 spannende künstlerische Workshops für Kinder von 6 - 12 Jahren.'
        }]
    }, {
        id: 19,
        creator_id: 7,
        project_title: 'Cenacolo Arabesque',
        project_tags: 'Konzert',
        picture: 'img/portfolio/Pictures/project_19.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_19.jpg'
        },
        paragraphs: [{
            title: 'Cenacolo Arabesque',
            content: 'Mit Mia und Leander hatten wir einen Auftritt im Theater Baden in Wien zusammen mit Studierenden der Ballettakademie Brünn aus Tschechien.'
        }]
    }, {
        id: 20,
        creator_id: 7,
        project_title: 'Istanbul Fever',
        project_tags: 'Ballet, Tanz',
        picture: 'img/portfolio/Pictures/project_20.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_20.jpg'
        },
        paragraphs: [{
            title: 'Istanbul Fever',
            content: '5th international Ballet Invitation for dance and schools Istanbul. Aufführungen in Zusammenarbeit mit der Silbermedaillengewinnerin Misa Solowjowa.'
        }]
    }, {
        id: 21,
        creator_id: 7,
        project_title: 'Mimi',
        project_tags: 'Fotografie, Katze',
        picture: 'img/portfolio/Pictures/project_21.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_21.jpg'
        },
        paragraphs: [{
            title: 'Mimi',
            content: 'Mit meiner neuen Canon EOS 600D machte ich erste Versuche und experimentierte mit Schärfen und Unschärfen. Mein Modell war meine zwei Monate alte Katze Mimi, die sich sichtlich wohl fühlte.'
        }]
    }, {
        id: 22,
        creator_id: 7,
        project_title: 'Musée d‘ Orsay Paris',
        project_tags: 'Museum, Reise',
        picture: 'img/portfolio/Pictures/project_22.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_22.jpg'
        },
        paragraphs: [{
            title: 'Musée d‘ Orsay Paris',
            content: 'Mit unseren beiden Kunstdozenten Aria Farell und Diego de la Ca  besuchten wir die spannende Kunstmetropole Paris. Auf dem Programm standen, Louvre, Pompidou und das Musée d‘ Orsay. Vor allem interessant war die Spezialausstellung über Barocke Porträtkunst.'
        }]
    }, {
        id: 23,
        creator_id: 7,
        project_title: 'Artefacte',
        project_tags: 'Ausstellung',
        picture: 'img/portfolio/Pictures/project_23.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_23.jpg'
        },
        paragraphs: [{
            title: 'Artefacte',
            content: 'Kunsthandwerk gestern - Kunsthandwerk heute. Mit dem Studiengang Style und Design besuchten wir die Ausstellung Artefacte in der Gallerie Gesang in Emmenbrücke. In einem anschliessenden Modul evaluierten wir die Veränderungen in der Strickmode der letzten 100 Jahre.'
        }]
    }, {
        id: 24,
        creator_id: 1,
        project_title: 'Klassenreise Lofoten',
        project_tags: 'Reise',
        picture: 'img/portfolio/Pictures/project_24.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_24.jpg'
        },
        paragraphs: [{
            title: 'Klassenreise Lofoten',
            content: 'Unsere Klasse flog im September für eine Woche gut ausgerüstet nach Gimsoysand,  wo wir das farbenprächtige Nordlicht beobachteten und fotografieren konnten. In kalten klaren Herbstnächten den Norhimmel über sich zu erleben, war eines der eindrücklichsten Erlebnissen überhaupt.'
        }]
    }, {
        id: 25,
        creator_id: 1,
        project_title: 'Corner Brook',
        project_tags: 'Fotografie',
        picture: 'img/portfolio/Pictures/project_25.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_25.jpg'
        },
        paragraphs: [{
            title: 'Corner Brook',
            content: 'Als passionierter Taucher hatte ich die einmalige Gelegenheit in den Riffen des Cornerbrook Rivers mit meiner Unterwasserkamera zu fotografieren. Mit einer Nikon 1 Aw1 trotzte ich den nicht einfachen Bedingungen des sehr bewegten Wassers. das Licht war trotz allem sensationell.'
        }]
    }, {
        id: 26,
        creator_id: 1,
        project_title: 'Red & Ronny',
        project_tags: 'Animation',
        picture: 'img/portfolio/Pictures/project_26.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_26.jpg'
        },
        paragraphs: [{
            title: 'Red & Ronny',
            content: 'Ausgehend von alten Dias der Firma Franks Motion hatten wir die Aufgabe, anhand alter Dias Figuren zu übernehmen und Animationen in Form von Comics mit After Effects zu kreieren. Meine beiden Protagonisten hiessen Red & Ronny. '
        }]
    }, {
        id: 27,
        creator_id: 1,
        project_title: 'Urbanes Wohnen',
        project_tags: 'Fotografie, Gallerie',
        picture: 'img/portfolio/Pictures/project_27.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_27.jpg'
        },
        paragraphs: [{
            title: 'Urbanes Wohnen',
            content: 'Mit einer alten analogen Zenit Kamera erforschten wir Olten. Daraus entstand eine Bildergallerie zum Thema Urbanes Wohnen. '
        }]
    }, {
        id: 28,
        creator_id: 1,
        project_title: 'Girls do fight',
        project_tags: 'Werbung, Plakat',
        picture: 'img/portfolio/Pictures/project_28.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_28.jpg'
        },
        paragraphs: [{
            title: 'Girls do fight',
            content: 'Für Helsana mussten wir als Klassenprojekt eine Werbekampagne zum Thema  Sport & Gleichberechtigung visuell umsetzen. Daraus entstand eine Plakatserie, welche im Helsana Hauptgebäude von Mai – Juni 2015 ausgestellt ist.'
        }]
    }, {
        id: 29,
        creator_id: 1,
        project_title: 'Insieme',
        project_tags: 'Broschüre, Grafik',
        picture: 'img/portfolio/Pictures/project_29.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_29.jpg'
        },
        paragraphs: [{
            title: 'Insieme',
            content: 'Für eine Broschüre ‘Sauberes Zürich’ versuchte ich mit inszenierten Bildern öffentliche Schauplätze zum Thema zu machen. '
        }]
    }, {
        id: 30,
        creator_id: 1,
        project_title: 'Lost Erik',
        project_tags: 'Film',
        picture: 'img/portfolio/Pictures/project_30.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_30.jpg'
        },
        paragraphs: [{
            title: 'Lost Erik',
            content: 'In meinem Psychodrama erzähle ich die Geschichte von Erik, der auf dem Weg zu einer Kostümparty das Gedächtnis verlor.'
        }]
    }, {
        id: 31,
        creator_id: 1,
        project_title: 'Die Geldmaschine',
        project_tags: 'Theater. Aufführung',
        picture: 'img/portfolio/Pictures/project_31.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_31.jpg'
        },
        paragraphs: [{
            title: 'Die Geldmaschine',
            content: 'Frank und Chris. 2 Schlitzohren, die mit Tricksen und Gaunereien in den Saloons von New Mexico sich über Wasser halten. Dummerweise kreuzen sich ihre Wege und altbewährte Tricke werdend vom Gegenüber durchschaut. Schnell erkennen sie, dass zu zweit die Trickserei grössere Formen annehmen kann. Sie beschliessen nach Texas zu gehen um ihr Glück zu suchen. '
        }]
    }, {
        id: 32,
        creator_id: 1,
        project_title: 'JUNK-ROBOTS',
        project_tags: 'Industriedesign, Roboter',
        picture: 'img/portfolio/Pictures/project_32.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_32.jpg'
        },
        paragraphs: [{
            title: 'JUNK-ROBOTS',
            content: 'Aus altem Elektroschrott bestand die Aufgabe, Mini-Roboter mit Funktionen auszustatten, welche Leute erschrickt. Mein Modell schaffte es, mittels Blickkontakte zu hypnothisieren. '
        }]
    }, {
        id: 33,
        creator_id: 1,
        project_title: 'Zurich meets Florence',
        project_tags: 'Musik',
        picture: 'img/portfolio/Pictures/project_33.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_33.jpg'
        },
        paragraphs: [{
            title: 'Zurich meets Florence',
            content: 'Unsere Klasse besuchte den Dom von Pisa, wo wir mit akustischen Experimenten einen Austausch mit Musikstudenten von Florenz unter der Leitung von Piero Rosalva suchten.'
        }]
    }, {
        id: 34,
        creator_id: 1,
        project_title: 'Geräuschefänger',
        project_tags: 'Tonmeister, Sound',
        picture: 'img/portfolio/Pictures/project_34.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_34.jpg'
        },
        paragraphs: [{
            title: 'Geräuschefänger',
            content: 'Aufgabe war es, Alltagsgeräusche im urbanen Umfeld zu sammeln und anhand eines Musikstückes von Maurice Ravel musikalisch zu interpretieren. Dazu gab es eine Aufführung aller entsandener Projekte im Rahmen der Vertiefung ‘Tonmeister’.'
        }]
    }, {
        id: 35,
        creator_id: 1,
        project_title: 'Barcelona Reise',
        project_tags: 'Strassenkunst, Reise',
        picture: 'img/portfolio/Pictures/project_35.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_35.jpg'
        },
        paragraphs: [{
            title: 'Barcelona Reise',
            content: 'Unsere Fachklasse Bildende Kunst  reiste mit einem alten VW Bus nach Barcelona. Unterwegs wurde gemalt, fotografiert, wichtige Städte besucht. An der Promenade Las Ramblas auf der Plaza de Catalunya stellten wir Werke aus zum Thema Strassenkunst. Leider wurden wir nach 20 Minuten von der spanischen Polizei wegen Unruhestiftung weggeschickt. '
        }]
    }, {
        id: 36,
        creator_id: 1,
        project_title: 'Komposition und Arrangement',
        project_tags: 'Jazz',
        picture: 'img/portfolio/Pictures/project_36.jpg',
        banner: {
            type: 'picture',
            url: 'img/portfolio/Pictures/project_36.jpg'
        },
        paragraphs: [{
            title: 'Komposition und Arrangement',
            content: 'In der Musikkantine an der Grabenstrasse in Luzern präsentierte das Departement Jazz diverse Projekte auf Bühnen in und um Luzern. Eine Zusammenarbeit mit dem Studiengang im Profil Jazz der Hochschule Luzern.'
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
