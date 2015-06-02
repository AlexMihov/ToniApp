angular.module('ToniApp.controllers', [])

.controller('MarketCtrl', function($scope, $location, $state, $ionicScrollDelegate, MarketEntries, Filters) {
        $scope.marketEntries = MarketEntries.getAll();
        $scope.filters = Filters.getAll();
        $scope.showFilters = false;
        $scope.newEntry = {
            from: new Date(),
            to: new Date()
        };
        $scope.filterDates = {
            from: new Date(),
            to: new Date()
        };
        $scope.resetFields = function() {
            $scope.newEntry = {
                from: new Date(),
                to: new Date(),
                url: ''
            };
            $ionicScrollDelegate.scrollTop();
        };

        $scope.displayFilter = function(show) {
            if (show) {
                $scope.showFilters = true;
            } else if (!show) {
                $scope.showFilters = false;
            }
        };

        $scope.toggleFilter = function(filter) {
            filter.active = !filter.active;

        };
        $scope.isFilterShown = function(filter) {
            return $scope.shownFilter === filter;
        };

        $scope.gotoCreateNew = function() {
            $location.path('/tab/market/new');
        };
        $scope.handleTopButton = function() {
            if (!$scope.showFilters) {
                $scope.gotoCreateNew();
            } else {}
        };
    })
    .controller('MarketFilterCtrl', function($scope, $location, $state, $stateParams, MarketEntries, Filters) {
        $scope.currentID = $stateParams.filterID;
        $scope.currentFilter = Filters.get($scope.currentID);
        $scope.filterDates = {
            from: new Date(),
            to: new Date()
        };

        $scope.resetFilter = function() {
            for (var i = 0; i < $scope.currentFilter.items.length; i++) {
                $scope.currentFilter.items[i].active = true;
            }
        };
    })

.controller('AccountCtrl', function($scope, $location, AccountPortfolios, Person) {
        $scope.currentTab = 'preview';
        var currentID = 7;
        $scope.view_expanded = false;
        $scope.portfolios = AccountPortfolios.getAll();
        $scope.currentPerson = Person.get(currentID);
        $scope.copyOfPerson = angular.copy($scope.currentPerson);
        $scope.newEntry = {
            url: ''
        };
        $scope.resetFields = function() {
            $scope.newEntry = {
                url: ''
            };
        };


        $scope.expandCard = function() {
            $scope.view_expanded = !$scope.view_expanded;
        };

        $scope.setCurrentTab = function(tabName) {
            $scope.currentTab = tabName;
        };
        $scope.displayFilter = function(show) {
            if (show) {
                $scope.showFilters = true;
            } else if (!show) {
                $scope.showFilters = false;
            }
        };
        $scope.handleTopButton = function() {
            $location.path('/tab/account/new');
        };

        $scope.getFirstName = function(fullName) {
            return fullName.split(' ')[0];
        };
        $scope.markCurrentTab = function(tabName) {
            if ($scope.currentTab === tabName) {
                return true;
            } else {
                return false;
            }
        };
    })
    .controller('AccountPortfolioCtrl', function($scope, $location, $stateParams, $sce, AccountPortfolios, Person) {
        var currentID = $stateParams.portfolioId;
        $scope.portfolios = AccountPortfolios.getAll();
        $scope.currentPortfolio = AccountPortfolios.get(currentID);
        $scope.currentPerson = Person.get($scope.currentPortfolio.creator_id);
        $scope.favorited = $scope.currentPortfolio.favorited;

        $scope.toggleFavorite = function() {
            $scope.favorited = !$scope.favorited;
        };

        $scope.prepareUrlForIframe = function(url) {
            return $sce.trustAsResourceUrl(url);
        };

    })
    .controller('PortfolioDetailCtrl', function($scope, $location, $stateParams, Portfolios, Person) {
        var currentID = $stateParams.portfolioId;
        $scope.portfolios = Portfolios.getAll();
        $scope.currentPerson = Person.get(currentID);
        $scope.view_expanded = false;

        $scope.expandCard = function() {
            $scope.view_expanded = !$scope.view_expanded;
        };

        $scope.getFirstName = function(fullName) {
            return fullName.split(' ')[0];
        };

    })

.controller('PortfolioProjectDetailCtrl', function($scope, $location, $stateParams, $sce, Portfolios, Person) {
    var currentID = $stateParams.portfolioId;
    $scope.portfolios = Portfolios.getAll();
    $scope.currentPortfolio = Portfolios.get(currentID);
    $scope.currentPerson = Person.get($scope.currentPortfolio.creator_id);
    $scope.favorited = $scope.currentPortfolio.favorited;

    $scope.toggleFavorite = function() {
        $scope.favorited = !$scope.favorited;
    };

    $scope.prepareUrlForIframe = function(url) {
        return $sce.trustAsResourceUrl(url);
    };

})

.controller('PortfolioCtrl', function($scope, $log, Portfolios, Person, Filters) {
    $scope.portfolios = Portfolios.getAll();
    $scope.filters = Filters.getAll();
    $scope.people = Person.getAll();
    $scope.currentTab = "Portfolios";
    $scope.showGrid = false;

    $scope.toggleFilter = function(filter) {
        filter.active = !filter.active;

    };
    $scope.isFilterShown = function(filter) {
        return $scope.shownFilter === filter;
    };

    $scope.handleTopButton = function() {
        $scope.showGrid = !$scope.showGrid;
    };

    $scope.markCurrentTab = function(tabName) {
        if (tabName === $scope.currentTab) {
            return true;
        } else {
            return false;
        }
    };
    $scope.toggleFavorited = function(item) {
        for (var i = 0; i < $scope.portfolios.length; i++) {
            if ($scope.portfolios[i] == item) {
                $scope.portfolios[i].favorited = !$scope.portfolios[i].favorited;
                return;
            }
        }
    };

    $scope.setCurrentTab = function(tabName) {
        $scope.currentTab = tabName;
    };
})

.controller('PortfolioFilterCtrl', function($scope, $location, $state, $stateParams, MarketEntries, Filters) {
    $scope.currentID = $stateParams.filterID;
    $scope.currentFilter = Filters.get($scope.currentID);
    $scope.filterDates = {
        from: new Date(),
        to: new Date()
    };
    $scope.resetFilter = function() {
        for (var i = 0; i < $scope.currentFilter.items.length; i++) {
            $scope.currentFilter.items[i].active = true;
        }
    };
})

.filter('PortfolioRows', function() {
        return function(arrayLength) {
            arrayLength = Math.ceil(arrayLength);
            var arr = new Array(arrayLength);
            for (i = 0; i < arrayLength; i++) {
                arr[i] = i;
            }
            return arr;
        };
    })
    .filter('cut', function() {
        return function(value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    })


.controller('MarketDetailCtrl', function($scope, $state, $location, $stateParams, $ionicHistory, MarketEntries, Person) {
    var currentID = $stateParams.marketEntryID;
    $scope.marketEntry = MarketEntries.get(currentID);
    $scope.currentPerson = Person.get($scope.marketEntry.creator_id);

    $scope.redirectToProfile = function(portfolioId) {
        $state.go('tab.portfolios-detail', {
            portfolioId: portfolioId
        });
    };

    $scope.getFirstName = function(fullName) {
        return fullName.split(' ')[0];
    };

    $scope.gotoMessage = function() {
        $location.path('/tab/market/' + currentID + '/message');
    };
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatsCtrl', function($scope, Chats, Person) {
    $scope.chats = Chats.all();

    $scope.getPersonForChat = function(personID) {
        return Person.get(personID);
    };
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, $anchorScroll, $location, $timeout, $ionicScrollDelegate, Person, Chats) {
    $scope.currentPerson = Person.get(7);
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.friend = Person.get($scope.chat.chatFrom);

    var scrollToBot = function() {
        $ionicScrollDelegate.scrollBottom(true);
    };
    $timeout(scrollToBot, 500);
});
