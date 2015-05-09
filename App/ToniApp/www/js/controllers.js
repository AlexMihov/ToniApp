angular.module('ToniApp.controllers', [])

.controller('MarketCtrl', function($scope, MarketEntries) {
    $scope.marketEntries = MarketEntries.getAll();
})

.controller('MarketDetailCtrl', function($scope, $stateParams, MarketEntries) {
	var currentID = $stateParams.marketEntryID;
    $scope.marketEntry = MarketEntries.get(currentID);
    console.log('controller log', $scope.marketEntry);
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
