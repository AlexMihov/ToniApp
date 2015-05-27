angular.module('ToniApp.services')

.factory('Person', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var person = [{
        id: 0,
        name: 'Alex Mihov',
        department: 'IT',
        studies: 'Informatik',
        semester: 4,
        email: 'alex@mihov.ch',
        interests: 'Programmieren, Apps, Fotografie',
        phone: '+41 079 612 02 84'
    }, {
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
        name: 'David Simon',
        department: 'DMU',
        studies: 'Komposition',
        semester: 4,
        email: 'david.simon@zhdk.ch',
        interests: 'Klassik, Pop, Jazz, Film, Animation',
        phone: '+41 079 956 21 75'
    }, {
        id: 20,
        name: 'Stephan Lüthi',
        department: 'DDE',
        studies: 'Style & Design',
        semester: 6,
        email: 'stephan.luethi@zhdk.ch',
        interests: 'Nähen, Mode, Programming, Performance',
        phone: '+41 079 956 21 75'
    }, {
        id: 21,
        name: 'Seraina Monfils',
        department: 'DDE',
        studies: 'Game Design',
        semester: 2,
        email: 'seraina.monfils@zhdk.ch',
        interests: 'Programming, Cinema 4D, Skizzen, Konzept, Wireframe, Illustrator',
        phone: '+41 079 956 21 75'
    }, {
        id: 22,
        name: 'Prisca Furrer',
        department: 'DDE',
        studies: 'Interaction Design',
        semester: 6,
        email: 'prisca.furrer@zhdk.ch',
        interests: 'Fotografie, Programming, Apps, Rubi',
        phone: '+41 079 956 21 75'
    }, {
        id: 23,
        name: 'Daniela Träsch',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 2,
        email: 'daniela.traesch@zhdk.ch',
        interests: 'Fotografie, Grafik, Mode',
        phone: '+41 079 956 21 75'
    }, {
        id: 24,
        name: 'Silvana Caviezel',
        department: 'DDK',
        studies: 'Theater',
        semester: 2,
        email: 'silvana.caviezel@zhdk.ch',
        interests: 'Schauspiel, Tanz, Fotografie, Photoshop',
        phone: '+41 079 956 21 75'
    }, {
        id: 25,
        name: 'Sandro Frick',
        department: 'DDE',
        studies: 'Industrial Design',
        semester: 6,
        email: 'sandro.frick@zhdk.ch',
        interests: 'Werkstatt',
        phone: '+41 079 956 21 75'
    }, {
        id: 26,
        name: 'Julian Weber',
        department: 'DDE',
        studies: 'Visuelle Kommunikation',
        semester: 4,
        email: 'julian.weber@zhdk.ch',
        interests: 'Illustrator, Grafik, Konzept, Branding',
        phone: '+41 079 956 21 75'
    }, {
        id: 27,
        name: 'Alessio Chiellini',
        department: 'DMU',
        studies: 'Tonmeister',
        semester: 6,
        email: 'alessio.chiellini@zhdk.ch',
        interests: 'Audacity, Klassik, Jazz, Pop, Filmmusik',
        phone: '+41 079 956 21 75'
    }, {
        id: 28,
        name: 'Benjamin Bachmann',
        department: 'DDE',
        studies: 'Game Design',
        semester: 4,
        email: 'benjamin.bachmann@zhdk.ch',
        interests: 'Games, Cinema 4D, Werkstatt, Skizzen',
        phone: '+41 079 956 21 75'
    }, {
        id: 29,
        name: 'Mario Cammarota',
        department: 'DDK',
        studies: 'Theater',
        semester: 6,
        email: 'mario.cammarota@zhdk.ch',
        interests: 'Fotografie, Schauspiel, Performance, Film',
        phone: '+41 079 956 21 75'
    }, {
        id: 30,
        name: 'Niels de Bruijn',
        department: 'DDE',
        studies: 'Scientific Visualisation',
        semester: 2,
        email: 'niels.de.bruijn@zhdk.ch',
        interests: 'Skizzen, Zeichnen, Konzept, Branding',
        phone: '+41 079 956 21 75'
    }, {
        id: 31,
        name: 'Ramon Camenzind',
        department: 'DDE',
        studies: 'CAST / Audiovisuelle Medien',
        semester: 2,
        email: 'ramon.camenzind@zhdk.ch',
        interests: 'Animation, Radio, Journalistik, Statist',
        phone: '+41 079 956 21 75'
    }, {
        id: 32,
        name: 'Jerome Koenig',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 6,
        email: 'jerome.koenig@zhdk.ch',
        interests: 'Illustrator, Photoshop, Fotografie',
        phone: '+41 079 956 21 75'
    }, {
        id: 33,
        name: 'Lucian Schmid',
        department: 'DDE',
        studies: 'Interaction Design',
        semester: 2,
        email: 'lucian.schmid@zhdk.ch',
        interests: 'Prototyping, Machines',
        phone: '+41 079 956 21 75'
    }, {
        id: 34,
        name: 'Thomas Eugster',
        department: 'DKM',
        studies: 'Mediale Künste',
        semester: 6,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Ausstellung, Performance, Sounddesign',
        phone: '+41 079 956 21 75'
    }, {
        id: 35,
        name: 'Fabian Ernst',
        department: 'DKM',
        studies: 'Bildende Kunst',
        semester: 4,
        email: 'fabian.ernst@zhdk.ch',
        interests: 'Skulptur, Mode, Ton, ',
        phone: '+41 079 956 21 75'
    }, {
        id: 36,
        name: 'Luzia Casanova',
        department: 'DDK',
        studies: 'Film',
        semester: 2,
        email: 'luzia.casanova@zhdk.ch',
        interests: 'Film, Schauspiel, Schnitt',
        phone: '+41 079 956 21 75'
    }, {
        id: 37,
        name: 'Chiara Zena',
        department: 'DDK',
        studies: 'Theater',
        semester: 4,
        email: 'chiara.zena@zhdk.ch',
        interests: 'Theater, Schauspiel, Performance',
        phone: '+41 079 956 21 75'
    }, {
        id: 38,
        name: 'Marina Hartmann',
        department: 'DKM',
        studies: 'Mediale Künste',
        semester: 2,
        email: 'marina.hartmann@zhdk.ch',
        interests: 'Fotografie, Skulptur, Graffiti',
        phone: '+41 079 956 21 75'
    }, {
        id: 39,
        name: 'Gioana Tafarel',
        department: 'DDK',
        studies: 'Tanz',
        semester: 6,
        email: 'gioana.tafarel@zhdk.ch',
        interests: 'Tanz, Pop, Hiphop',
        phone: '+41 079 956 21 75'
    }, {
        id: 40,
        name: 'Alicia Black',
        department: 'DMU',
        studies: 'Klassik',
        semester: 4,
        email: 'alicia.black@zhdk.ch',
        interests: 'Harfe, Klassik, Tanz, Konzept, Performance, Schmuck',
        phone: '+41 079 956 21 75'
    }, {
        id: 41,
        name: 'Fardeen Kapoor',
        department: 'DMU',
        studies: 'Musik und Bewegung',
        semester: 4,
        email: 'fardeen.kapoor@zhdk.ch',
        interests: 'Tanz, Volk, Klassik, Performance',
        phone: '+41 079 956 21 75'
    }, {
        id: 42,
        name: 'Sandra Knopp',
        department: 'DDE',
        studies: 'CAST / Audiovisuelle Medien',
        semester: 4,
        email: 'sandra.knopp@zhdk.ch',
        interests: 'Radio, Animation, Theater',
        phone: '+41 079 956 21 75'
    }, {
        id: 43,
        name: 'Lena Brouwer',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 2,
        email: 'lena.brouwer@zhdk.ch',
        interests: 'Fotografie, Jazz, Photoshop, Illustrator, Indesign',
        phone: '+41 079 956 21 75'
    }, {
        id: 44,
        name: 'Irina Ovechkin',
        department: 'DKM',
        studies: 'Mediale Künste',
        semester: 4,
        email: 'irina.ovechkin@zhdk.ch',
        interests: 'Architektur',
        phone: '+41 079 956 21 75'
    }, {
        id: 45,
        name: 'Lynn Gallaghan',
        department: 'DMU',
        studies: 'Jazz & Pop',
        semester: 6,
        email: 'lynn.gallaghan@zhdk.ch',
        interests: 'Pop, Tanz, Radio',
        phone: '+41 079 956 21 75'
    }, {
        id: 46,
        name: 'Ulrike Meister',
        department: 'DKM',
        studies: 'Fotografie',
        semester: 6,
        email: 'ulrike.meister@zhdk.ch',
        interests: 'Fotografie, Architektur',
        phone: '+41 079 956 21 75'
    }, {
        id: 47,
        name: 'Laura Sosa',
        department: 'DKM',
        studies: 'Mediale Künste',
        semester: 2,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Vermittlung, Geschichte',
        phone: '+41 079 956 21 75'
    }, {
        id: 48,
        name: 'Martin Kramer',
        department: 'DDE',
        studies: 'Scientific Visualisation',
        semester: 6,
        email: 'martin.kramer@zhdk.ch',
        interests: 'Reisen, Garten, Fotografie',
        phone: '+41 079 956 21 75'
    }, {
        id: 49,
        name: 'Leonie Siegenthaler',
        department: 'DDK',
        studies: 'Film',
        semester: 2,
        email: 'leonie.siegenthaler@zhdk.ch',
        interests: 'Film, Regie, Makeup',
        phone: '+41 079 956 21 75'
    }, {
        id: 50,
        name: 'Sofia Castelazzo',
        department: 'DDE',
        studies: 'Visuelle Kommunikation',
        semester: 6,
        email: 'sofia.castelazzo@zhdk.ch',
        interests: 'Konzept, Illustrator, Branding, Werbung',
        phone: '+41 079 956 21 75'
    }, {
        id: 51,
        name: 'Emma Müller',
        department: 'DDE',
        studies: 'Style & Design',
        semester: 4,
        email: 'emma.mueller@zhdk.ch',
        interests: 'Performance, Video, Mode, Natur',
        phone: '+41 079 956 21 75'
    }, {
        id: 52,
        name: 'Sara Jennings',
        department: 'DMU',
        studies: 'Jazz & Pop',
        semester: 4,
        email: 'sara.jennings@zhdk.ch',
        interests: 'Rock, Pop, Soul, Gesang, Performance',
        phone: '+41 079 956 21 75'
    }, {
        id: 53,
        name: 'Madlaina Saurer',
        department: 'DKM',
        studies: 'Bildende Kunst',
        semester: 4,
        email: 'julia.zelter@zhdk.ch',
        interests: 'Fotografie, Geschichte',
        phone: '+41 079 956 21 75'
    }, {
        id: 54,
        name: 'Lea Bärtschi',
        department: 'DDE',
        studies: 'Style & Design',
        semester: 2,
        email: 'lea.baertschi',
        interests: 'Nähen, Mode, Konzept',
        phone: '+41 079 956 21 75'
    }, {
        id: 55,
        name: 'Mia Kern',
        department: 'DDE',
        studies: 'Style & Design',
        semester: 6,
        email: 'mia.kern.ch',
        interests: 'Video, Mode',
        phone: '+41 079 956 21 75'
    }, {
        id: 56,
        name: 'Alina Sahler',
        department: 'DMU',
        studies: 'Musik und Bewegung',
        semester: 4,
        email: 'alina.sahler@zhdk.ch',
        interests: 'Tanz, Theater, Jazz',
        phone: '+41 079 956 21 75'
    }, {
        id: 57,
        name: 'Sabrina Koch',
        department: 'DDE',
        studies: 'Visuelle Kommunikation',
        semester: 2,
        email: 'sabrina.koch@zhdk.ch',
        interests: 'Indesign, Konzept',
        phone: '+41 079 956 21 75'
    }, {
        id: 58,
        name: 'Louise Lexter',
        department: 'DDK',
        studies: 'Theater',
        semester: 2,
        email: 'louise.lexter@zhdk.ch',
        interests: 'Schauspiel, Theater, Improvisation, Gesang',
        phone: '+41 079 956 21 75'
    }, {
        id: 59,
        name: 'Vanessa von Bergen',
        department: 'DKM',
        studies: 'CAST / Audiovisuelle Medien',
        semester: 2,
        email: 'vanessa.vonbergen',
        interests: 'Video, Design, Illustrator',
        phone: '+41 079 956 21 75'
    }, {
        id: 60,
        name: 'Luzian Tobler',
        department: 'DDE',
        studies: 'Interaction',
        semester: 2,
        email: 'luzian.tobler',
        interests: 'Fotografie, Virtual Reality',
        phone: '+41 079 956 21 75'
    }, {
        id: 61,
        name: 'Melanie Gubser',
        department: 'DDE',
        studies: 'Style & Design',
        semester: 6,
        email: 'melanie.gubser@zhdk.ch',
        interests: 'Nähen, Mode, Typografie',
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
