angular.module('ToniApp.services')

.factory('Person', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var person = [{
        id: 0,
        name: 'Moris Freiburghaus',
        studies: 'DDK, Film, 6. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 1,
        name: 'Maria Feltscher',
        studies: 'Digital Art, 1. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 2,
        name: 'Luca Siebner',
        studies: 'Digital Art, 1. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 3,
        name: 'Benjamin Sulser',
        studies: 'Digital Art, 1. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 4,
        name: 'Ana Minovic',
        studies: 'Digital Art, 1. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 5,
        name: 'Nicolaus Fehr',
        studies: 'Digital Art, 1. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 6,
        name: 'Frederike Gruber',
        studies: 'Digital Art, 1. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 7,
        name: 'Tom Spycher',
        studies: 'Digital Art, 1. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 8,
        name: 'Martin Wey',
        studies: 'Architektur, 4. Semester',
        email:'',
        phone:'',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
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
