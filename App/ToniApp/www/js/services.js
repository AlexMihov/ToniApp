angular.module('ToniApp.services', [])

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
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
}).factory('MarketEntries', function($http) {
    // Might use a resource here that returns a JSON array
    var marketEntries =  $http.get('../data/marketEntries.json').success(function(data){
      marketEntries.data = data;

    });

    return {
        getAll: function() {
            return marketEntries;
        },
        remove: function(marketEntry) {
            marketEntries.splice(marketEntries.indexOf(marketEntry), 1);
        },
        get: function(marketEntryId) { 
         marketEntries.then(function(data){
            console.log(data.data);
            for (var i = 0; i < data.data.length; i++) {
              console.log(data.data[i].id);
                if (data.data[i].id === parseInt(marketEntryId)) {
                  console.log('returning', data.data[i]);
                    return data.data[i];
                }
            }
            return null;
          })
        }
    };
});
