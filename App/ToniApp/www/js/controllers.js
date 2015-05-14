angular.module('ToniApp.controllers', [])

.controller('MarketCtrl', function($scope, $location, $state, MarketEntries, Filters) {
    $scope.marketEntries = MarketEntries.getAll();
    $scope.filters = Filters.getAll();
    $scope.showFilters = false;
    $scope.newEntry = {
        from: new Date(),
        to: new Date()
    };
    $scope.derp = true;

    $scope.displayFilter = function(show) {
        if (show) {
            $scope.showFilters = true;
        } else if (!show) {
            $scope.showFilters = false;
        }
    }

    $scope.toggleFilter = function(filter) {
        filter.active = !filter.active;

    };
    $scope.isFilterShown = function(filter) {
        return $scope.shownFilter === filter;
    };

    $scope.gotoCreateNew = function() {
        $location.path('/tab/market/new');
    }
    $scope.handleTopButton = function(){
    	if(!$scope.showFilters){
    		gotoCreateNew();
    	}else{
    		window.location.reload();
    	}
    }
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
