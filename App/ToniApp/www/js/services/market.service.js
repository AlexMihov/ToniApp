angular.module('ToniApp.services')
    .factory('MarketEntries', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var marketEntries = [{
            id: 0,
            title: 'Schauspieler gesucht',
            content_long: 'Für meinen Kurzfilm "Der toxische Morgen" suche ich unbedingt noch einen Schauspieler für die Rolle eines Jägers. Schaupielerfahrung wär erwünscht, Alter bevorzugt zwischen 30-40, männlich',
            tags: ['Video', 'Film'],
            timespan: '3 Drehtage, voraussichtlich Mitte Mai',
            creator_id: 1
        }, {
            id: 1,
            title: 'Tänzer für Tanzshow YIKYAK',
            content_long: 'Hast du Freude an Popmusik und du tanzt gerne? Für unsere Performance brauchen wir noch zwei männliche Tänzer, welche sehr gut breakdancen können. Sie werden im Hitergrund der Vorstellung für den zusätzliche WOW-Effekt sorgen und einige sehr komplizierte Moves ausführen müssen.',
            tags: ['Tanz'],
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator_id: 2
        }, {
            id: 2,
            title: 'Suche erfahrenen Fotografen',
            content_long: 'Für meine neue Kleiderkollektion erstelle ich ein Fashion Lookbook. Gibt es einen Fotografen, der Erfahrung mit Shootings hat und mir gerne für eine sehr kleine Entlöhnung helfen will. Es werden professionelle Models anwesend sein, welche schon für grosse Kleiderlabels gearbeitet haben.',
            tags: ['Fotografie'],
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator_id: 3
        }, {
            id: 3,
            title: 'Brauche Hilfe bei After Effects',
            content_long: 'Ich versuche eine tolle Animation zu machen, jedoch kenne ich mich nicht so gut aus mit After Effects CS6 und brauche dringend Hilfe von jemandem. Bei meinem Problem geht es um verschiede Verhalten bei Partikeln, welche sich physikalisch korrekt verhalten sollten.',
            tags: ['After Effects'],
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator_id: 4
        }, {
            id: 4,
            title: 'Webentwickler für Webshop',
            content_long: 'Ich habe ein eigenes Kleiderlabel entworfen und will meine Kleider in einem Webshop verkaufen. Suche dringend einen guten Fotografen. Ich wäre sehr froh, wenn du mir kurz deine Refferenzen schicken könntest in Form von einem Link. Ich werde sie mir ansehen und dich danach kontaktieren.',
            tags: ['Web','Informatik',' Design'],
            timespan: 'Jedes Wochenende im Juni, 2015',
            creator_id: 5
        }];

        return {
            getAll: function() {
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
