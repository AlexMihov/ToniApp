angular.module('ToniApp.services')

.factory('Person', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var person = [{
        id: 1,
        name: 'Marco Frey',
        department: 'DMU',
        studies: 'Jazz & Pop',
        semester: 4,
        email: 'marco.frey@zhdk.ch',
        interests: 'Jazz, Gitarre, Piano, Konzert',
        phone: '+41 079 945 22 75'
    }, {
        id: 2,
        name: 'Luca Siebner',
        department: 'DDK',
        studies: 'Tanz',
        semester: '2',
        email: 'luca.siebner@zhdk.ch',
        interests: 'Tanz, Klassik',
        phone: '+41 079 129 86 75'
    }, {
        id: 3,
        name: 'Janette Delavy',
        department: 'DDK',
        studies: 'Tanz',
        semester: 6,
        email: 'janette.delavy@zhdk.ch',
        interests: 'Ballet, Klassik, Tanz, Schauspiel, Mode',
        phone: '+41 079 956 21 75'
    }, {
        id: 4,
        name: 'Rolph Kessler',
        department: 'DMU',
        studies: 'Jazz & Pop',
        semester: 2,
        email: 'rolph.kessler@zhdk.ch',
        interests: 'Rock, Jazz, Animation, Grafik',
        phone: '+41 079 956 21 75'
    }, {
        id: 5,
        name: 'Kevin Brättler',
        department: 'DDE',
        studies: 'Visuelle Kommunikation',
        semester: 4,
        email: 'kevin.braettler@zhdk.ch',
        interests: 'Grafik, Design, Branding, Produkte, Illustrator',
        phone: '+41 079 956 21 75'
    }, {
        id: 6,
        name: 'Sophia Conrad',
        department: 'DDE',
        studies: 'Industrial Design',
        semester: 2,
        email: 'sophia.conrad@zhdk.ch',
        interests: 'Produkte, Cinema 4D, Werkstatt',
        phone: '+41 079 956 21 75'
    }, {
        id: 7,
        name: 'Mattias Bush',
        department: 'DDE',
        studies: 'CAST / Audiovisuelle Medien',
        semester: 6,
        email: 'mattias.bush@zhdk.ch',
        interests: 'Film, Grafik, Konzept, Photoshop, Premiere',
        phone: '+41 079 772 37 70'
    }, {
        id: 8,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel',
        phone: '+41 079 956 21 75'
    }, {
        id: 9,
        name: 'Enzo De Gani',
        department: 'DDE',
        studies: 'Interaction Design',
        semester: 4,
        email: 'enzo.degani@zhdk.ch',
        interests: 'Konzept, Maschinen, Cinema 4D, Programming',
        phone: '+41 079 956 21 75'
    }, {
        id: 10,
        name: 'Frank De Boer',
        department: 'DMU',
        studies: 'Klassik',
        semester: 6,
        email: 'frank.deboer@zhdk.ch',
        interests: 'Klassik, Trompete, Big Band',
        phone: '+41 079 956 21 75'
    }, {
        id: 11,
        name: 'Reto Züller',
        department: 'DKM',
        studies: 'Mediale Künste',
        semester: 4,
        email: 'reto.züller@zhdk.ch',
        interests: 'Grafik, Virtual Reality',
        phone: '+41 079 956 21 75'
    }, {
        id: 12,
        name: 'Mark Seiler',
        department: 'DDK',
        studies: 'Film',
        semester: 6,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Film, Regie, Schnitt, Premiere, Color Crading, Schauspiel, Kamera',
        phone: '+41 079 956 21 75'
    }, {
        id: 13,
        name: 'Nadja Bächler',
        department: 'DMU',
        studies: 'Kirchenmusik',
        semester: 2,
        email: 'nadja.baechler@zhdk.ch',
        interests: 'Klavier, Orgel, Klassik',
        phone: '+41 079 956 21 75'
    }, {
        id: 14,
        name: 'Juan Jimenez',
        department: 'DDE',
        studies: 'Scientific Visualisation',
        semester: 2,
        email: 'juan.jimenez@zhdk.ch',
        interests: 'Fine Arts, Collage, Konzept, Fotografie',
        phone: '+41 079 956 21 75'
    }, {
        id: 15,
        name: 'Ana Mikova',
        department: 'DDK',
        studies: 'Tanz',
        semester: 2,
        email: 'ana.mikova@zhdk.ch',
        interests: 'Ballet, Jazz, Pop, Hiphop',
        phone: '+41 079 956 21 75'
    }, {
        id: 16,
        name: 'Mat Henderson',
        department: 'DMU',
        studies: 'Komposition',
        semester: 6,
        email: 'mat.henderson@zhdk.ch',
        interests: 'Komposition, Audacity, Filmmusik',
        phone: '+41 079 956 21 75'
    }, {
        id: 17,
        name: 'Katharina Weimann',
        department: 'DDE',
        studies: 'Style & Design',
        semester: 4,
        email: 'katharina.weimann@zhdk.ch',
        interests: 'Fotografie, Mode, Nähen, Aufführungen',
        phone: '+41 079 956 21 75'
    }, {
        id: 18,
        name: 'Sarah Tomet',
        department: 'DKM',
        studies: 'Mediale Künste',
        semester: 2,
        email: 'sarah.tomet@zhdk.ch',
        interests: 'Schauspiel, Fotografie, Werkstatt',
        phone: '+41 079 956 21 75'
    }, {
        id: 19,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 20,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 21,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 22,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 23,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 24,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 25,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 26,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 27,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 28,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 29,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 30,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 31,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 32,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 33,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 34,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 35,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 36,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 37,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 38,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 39,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 40,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 41,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 42,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 43,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 44,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 45,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 46,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 47,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 48,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 49,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 50,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 51,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 52,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 53,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 54,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 55,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 56,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 57,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 58,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 59,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 60,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 61,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 62,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 63,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }, {
        id: 64,
        name: 'Julia Zelter',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Inszenierung, Tanz, Schauspiel,',
        phone: '+41 079 956 21 75'
    }];

    return {
        getAll: function() {
            return person;
        },
        remove: function(chat) {
            person.splice(person.indexOf(chat), 1);
        },
        get: function(personId) {
            for (var i = 0; i < person.length; i++) {
                if (person[i].id === parseInt(personId)) {
                    return person[i];
                }
            }
            return null;
        }
    };
})
