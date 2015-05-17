angular.module('ToniApp.services')

.factory('Person', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var person = [{
        id: 0,
        name: 'Moris Freiburghaus',
        studies: 'DDK, Film, 6. Semester',
        email:'some_test@mail.ch',
        interests:'Regie, Schnitt, Kamera, Schauspiel',
        phone:'+41 079 956 21 75',
        face: 'http://warriorsskateboards.com/1/images/TEAM/Warriors_Teamportraits-01.jpg'
    }, {
        id: 1,
        name: 'Maria Feltscher',
        studies: 'Digital Art, 1. Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTY-PsNeuz74E5CSGHsTiIoZtElHrF5zEuiYXXRWPPmeGM2GSBf'
    }, {
        id: 2,
        name: 'Luca Siebner',
        studies: 'Digital Art, 1. Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3G7bL4ScwzfScKGpoY5j-PnnYTgRFYkDL7c2k5qa6xTQJn5mO'
    }, {
        id: 3,
        name: 'Benjamin Sulser',
        studies: 'Digital Art, 1. Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'https://www.time-to-change.org.uk/sites/default/files/imce_uploads/jonny-benjamin.JPG'
    }, {
        id: 4,
        name: 'Ana Minovic',
        studies: 'Digital Art, 1. Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'https://scontent-fra.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10649765_10205086615501740_8405602770357275613_n.jpg?oh=c002669c52c31b860734018c5c96bba9&oe=56023F9E'
    }, {
        id: 5,
        name: 'Nicolaus Fehr',
        studies: 'Digital Art, 1. Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'data:image/jpeg;base64,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'
    }, {
        id: 6,
        name: 'Frederike Gruber',
        studies: 'Digital Art, 1. Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'http://3.bp.blogspot.com/_dDiJ3Beteq0/ShZznrCw7tI/AAAAAAAADcY/dmql5DmWrMo/s400/Marta+Boan3.jpg'
    }, {
        id: 7,
        name: 'Mattias Bush',
        studies: 'Cast / Audiovisuelle Medien, 6.Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 8,
        name: 'Martin Wey',
        studies: 'Architektur, 4. Semester',
        email:'some_test@mail.ch',
        interests:'',
        phone:'+41 079 956 21 75',
        face: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-9/10931104_10204550932632122_264939083459701711_n.jpg?oh=3f51c73bbb10c3bd8188d08b471f250e&oe=55C9F08D&__gda__=1439276677_bba5c22b85a89bb48b7cd8dcc8e6f2b1'
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
