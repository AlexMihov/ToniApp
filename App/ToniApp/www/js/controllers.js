angular.module('ToniApp.controllers', [])

.controller('MarketCtrl', function($scope, MarketEntries, Filters) {
    $scope.marketEntries = MarketEntries.getAll();
    $scope.filters = Filters.getAll();
    $scope.showFilters = false;

    $scope.displayFilter = function(show) {
    	if(show){
    		$scope.showFilters = true;
    	} else if(!show){
    		$scope.showFilters = false;
    	}
    }

    $scope.toggleFilter = function(filter) {
        if ($scope.isFilterShown(filter)) {
            $scope.shownFilter = null;
        } else {
            $scope.shownFilter = filter;
        }
    };
    $scope.isFilterShown = function(filter) {
        return $scope.shownFilter === filter;
    };
})

.controller('MarketDetailCtrl', function($scope, $location, $stateParams, MarketEntries) {
    var currentID = $stateParams.marketEntryID;
    $scope.marketEntry = MarketEntries.get(currentID);

    $scope.gotoMessage = function() {
        $location.path('/tab/market/' + currentID + '/message');
    }
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
})

.controller('PortfolioCtrl', function($scope) {
    $scope.portfolios = "Not yet implemented"
});
