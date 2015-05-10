angular.module('ToniApp.services')

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Moris Freiburghaus',
        lastText: 'Hey Mattias, wie gahts? Bruchsch du irgendwie irgendöppis',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 5,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 6,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }, {
        id: 7,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11081316_10153128802383326_7628699609983322860_n.jpg?oh=60d2823edb8d0ae07395bd3b285ec3d2&oe=55D821B7&__gda__=1439452229_4e9daf55884ede1a60945abb18064bdd'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})
