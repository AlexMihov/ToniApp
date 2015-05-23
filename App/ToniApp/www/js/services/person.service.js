angular.module('ToniApp.services')

.factory('Person', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var person = [{
        id: 1,
        name: 'Maria Feltscher',
        studies: 'Digital Art, 1. Semester',
        email: 'some_test@mail.ch',
        interests: ''
    }, {
        id: 2,
        name: 'Luca Siebner',
        studies: 'Digital Art, 1. Semester',
        email: 'some_test@mail.ch',
        interests: '',
        phone: '+41 079 956 21 75'
    }, {
        id: 3,
        name: 'Benjamin Sulser',
        studies: 'Digital Art, 1. Semester',
        email: 'some_test@mail.ch',
        interests: '',
        phone: '+41 079 956 21 75'
    }, {
        id: 4,
        name: 'Ana Minovic',
        studies: 'Digital Art, 1. Semester',
        email: 'some_test@mail.ch',
        interests: '',
        phone: '+41 079 956 21 75'
    }, {
        id: 5,
        name: 'Nicolaus Fehr',
        studies: 'Digital Art, 1. Semester',
        email: 'some_test@mail.ch',
        interests: '',
        phone: '+41 079 956 21 75'
    }, {
        id: 6,
        name: 'Frederike Gruber',
        studies: 'Digital Art, 1. Semester',
        email: 'some_test@mail.ch',
        interests: '',
        phone: '+41 079 956 21 75'
    }, {
        id: 7,
        name: 'Mattias Bush',
        studies: 'Cast / Audiovisuelle Medien, 6.Semester',
        email: 'some_test@mail.ch',
        interests: '',
        phone: '+41 079 956 21 75'
    }, {
        id: 8,
        name: 'Martin Wey',
        studies: 'Architektur, 4. Semester',
        email: 'some_test@mail.ch',
        interests: '',
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
