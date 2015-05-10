angular.module('ToniApp.services')
    .factory('MarketEntries', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var marketEntries = [{
            id: 0,
            title: 'Schauspieler gesucht',
            content: 'Für meinen Kurzfilm "Der toxische Morgen" suche ich unbedingt noch einen Schauspieler für die Rolle eines Jägers...',
            content_long: 'Für meinen Kurzfilm "Der toxische Morgen" suche ich unbedingt noch einen Schauspieler für die Rolle eines Jägers. Schaupielerfahrung wär erwünscht, Alter bevorzugt zwischen 30-40, männlich',
            timespan: '3 Drehtage, voraussichtlich Mitte Mai',
            creator: 'Moris Freiburghaus'
        }, {
            id: 1,
            title: 'Tänzer für Tanzshow YIPYAP',
            content: 'Hast du Freude an Popmusik und du tanzt gerne? Für unsere Performance brauchen wir noch zwei männliche Tänzer...',
            content_long: 'Hast du Freude an Popmusik und du tanzt gerne? Für unsere Performance brauchen wir noch zwei männliche Tänzer, welche sehr gut breakdancen können. Sie werden im Hitergrund der Vorstellung für den zusätzliche WOW-Effekt sorgen und einige sehr komplizierte Moves ausführen müssen.',
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator: 'Moris Freiburghaus'
        }, {
            id: 2,
            title: 'Suche erfahrenen Fotografen',
            content: 'Für meine neue Kleiderkollektion erstelle ich ein Fashion Lookbook. Gibt es einen Fotografen, der Erfahrung mit Shootings...',
            content_long: 'Für meine neue Kleiderkollektion erstelle ich ein Fashion Lookbook. Gibt es einen Fotografen, der Erfahrung mit Shootings hat und mir gerne für eine sehr kleine Entlöhnung helfen will. Es werden professionelle Models anwesend sein, welche schon für grosse Kleiderlabels gearbeitet haben.',
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator: 'Moris Freiburghaus'
        }, {
            id: 3,
            title: 'Brauche Hilfe bei After Effects',
            content: 'Ich versuche eine tolle Animation zu machen, jedoch kenne ich mich nicht so gut aus mit After Effects CS6 und brauche...',
            content_long: 'Ich versuche eine tolle Animation zu machen, jedoch kenne ich mich nicht so gut aus mit After Effects CS6 und brauche dringend Hilfe von jemandem. Bei meinem Problem geht es um verschiede Verhalten bei Partikeln, welche sich physikalisch korrekt verhalten sollten.',
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator: 'Moris Freiburghaus'
        }, {
            id: 4,
            title: 'Webentwickler für Webshop',
            content: 'Ich habe ein eigenes Kleiderlabel entworfen und will meine Kleider in einem Webshop verkaufen. Suche dringend einen guten ...',
            content_long: 'Ich habe ein eigenes Kleiderlabel entworfen und will meine Kleider in einem Webshop verkaufen. Suche dringend einen guten Fotografen. Ich wäre sehr froh, wenn du mir kurz deine Refferenzen schicken könntest in Form von einem Link. Ich werde sie mir ansehen und dich danach kontaktieren.',
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator: 'Moris Freiburghaus'
        }];

        return {
            getAll: function() {
                console.log('getting the Market entries', marketEntries);
                return marketEntries;
            },
            remove: function(marketEntry) {
                marketEntries.splice(marketEntries.indexOf(marketEntry), 1);
            },
            get: function(marketEntryId) {
                for (var i = 0; i < marketEntries.length; i++) {
                    if (marketEntries[i].id === parseInt(marketEntryId)) {
                        return marketEntries[i];
                    }
                }
                return null;
            }
        };
    });
