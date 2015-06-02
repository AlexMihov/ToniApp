angular.module('ToniApp.services')

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        chatFrom: 0,
        conversation: [{
            isSender: true,
            text: 'S App isch ja huara geil! Wie hesch vor allem de Chat so geil herebracht?'
        }, {
            isSender: false,
            text: 'Und was meinsch? Hani gueti Arbet gleistet?'
        },{
            isSender: false,
            text: 'super, merci'
        },{
            isSender: true,
            text: 'Ich chume abe und hold di ab!'
        },{
            isSender: false,
            text: 'Ah ja, chans gseh, aber ich gsehn dini Schuel echt ned'
        },{
            isSender: true,
            text: 'Ou denn bisch uf der falscha Sieta; Gsehsch sona Gass? Musch die füra laufe!'
        }, {
            isSender: false,
            text: 'Hey ich bin bi de Haltistell vom 17er'
        },{
            isSender: false,
            text: 'Okay, werde denn bi de Tramhaltistell si!'
        }, {
            isSender: true,
            text: 'Sicher wür mi sehr freue, wenn mer eus am Mittwuch mal im Toniareal treffe? Ich wür am 15.00 vorschlah.'
        }, {
            isSender: false,
            text: 'Hoi Mattias! ich wür der gern helfe es App zmache'
        }]
    }, {
        id: 1,
        chatFrom: 14,
        conversation: [{
            isSender: true,
            text: 'Schreib doch in den Marktplatz! Dort findest du sicher jemanden.'
        },{
            isSender: true,
            text: 'Leider habe ich momentan keine Zeit, da ich mit meiner eigenen Arbeit sehr beschäftigt bin.'
        },{
            isSender: true,
            text: 'Hey!'
        },{
            isSender: false,
            text: 'Ich brauche für meine Bachelorarbeit unbedingt ein Logo, welches ich für mein Game verwenden will.'
        },{
            isSender: false,
            text: 'Hey kannst du mir echt mit einem Design helfen?'
        }]
    }, {
        id: 2,
        chatFrom: 5,
        conversation: [{
            isSender: false,
            text: 'hey! I saw your post in the market and would be very interested!'
        }]
    }, {
        id: 3,
        chatFrom: 4,
        conversation: [{
            isSender: false,
            text: 'thanks mate!'
        },{
            isSender: true,
            text: 'I will tell him that you asked me so that he will give you the access without a problem'
        },{
            isSender: true,
            text: 'You can ask Alex Mihov, he has the ownership of the Github repo'
        },{
            isSender: false,
            text: 'Hey can you give me the sourcecode for your app? I would really like to collaborate in it!'
        }]
    }, {
        id: 4,
        chatFrom: 9,
        conversation: [{
            isSender: true,
            text: 'What do you think about the camera angles?'
        },{
            isSender: true,
            text: 'I see you found my video :)'
        },{
            isSender: false,
            text: 'haha :D that is awesome <a href="https://www.youtube.com/watch?v=1rz8rXfnPWA">https://www.youtube.com/watch?v=1rz8rXfnPWA</a>'
        }]
    }, {
        id: 5,
        chatFrom: 52,
        conversation: [{
            isSender: true,
            text: 'Het mer echt freud gmacht eu z helfe! findi e super sach, dass ihr das dureziend!'
        },{
            isSender: true,
            text: 'Bitte bitte!'
        },{
            isSender: false,
            text: 'Bisch e grossi hilf gsi :)'
        },{
            isSender: false,
            text: 'ohni dich hets sicherlich ned glanget vo de Ziet!'
        },{
            isSender: false,
            text: 'Messi viel mal für dini Hilf bi eusem Projekt!'
        },{
            isSender: false,
            text: 'hey!'
        }]
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
});
