// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ToniApp', ['ionic', 'ToniApp.controllers', 'ToniApp.services'])

.run(function($ionicPlatform, $rootScope, $ionicPopup) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
        $rootScope.notImplemented = function(text) {
            if (text) {
                var alertPopup = $ionicPopup.alert({
                    title: 'ToniApp',
                    template: text
                });
            } else {
                var alertPopup = $ionicPopup.alert({
                    title: '<h2>ToniApp</h2>',
                    template: '<p style="text-align: center;">Diese Funktionalität ist in dieser Version noch nicht implmentiert!</p>'
                });
            }
        };
    });

})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.backButton.previousTitleText(false).text('');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    .state('tab.market-new', {
            url: '/market/new',
            views: {
                'tab-market': {
                    templateUrl: 'templates/tab-market-new.html',
                    controller: 'MarketCtrl'
                }
            }
        })
        // Each tab has its own nav history stack:
        .state('tab.market-detail', {
            url: '/market/:marketEntryID',
            views: {
                'tab-market': {
                    templateUrl: 'templates/tab-market-detail.html',
                    controller: 'MarketDetailCtrl'
                }
            }
        })

    .state('tab.market-filter', {
        url: '/market/filter/:filterID',
        views: {
            'tab-market': {
                templateUrl: 'templates/tab-market-filter.html',
                controller: 'MarketFilterCtrl'
            }
        }
    })

    .state('tab.market-message', {
        url: '/market/:marketEntryID/message',
        views: {
            'tab-market': {
                templateUrl: 'templates/tab-market-message.html',
                controller: 'MarketDetailCtrl'
            }
        }
    })


    .state('tab.market', {
        url: '/market',
        views: {
            'tab-market': {
                templateUrl: 'templates/tab-market.html',
                controller: 'MarketCtrl'
            }
        }
    })


    .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
        .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })

    .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        })
        .state('tab.account-portfolio-new', {
            url: '/account/new',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account-new.html',
                    controller: 'AccountCtrl'
                }
            }
        })
        .state('tab.portfolios', {
            url: '/portfolios',
            views: {
                'tab-portfolios': {
                    templateUrl: 'templates/tab-portfolios.html',
                    controller: 'PortfolioCtrl'
                }
            }
        })
        .state('tab.portfolios-detail', {
            url: '/portfolios/:portfolioId',
            views: {
                'tab-portfolios': {
                    templateUrl: 'templates/tab-portfolios-details.html',
                    controller: 'PortfolioDetailCtrl'
                }
            }
        })
        .state('tab.portfolios-projectDetail', {
            url: '/portfolios/project/:portfolioId',
            views: {
                'tab-portfolios': {
                    templateUrl: 'templates/tab-portfolios-projectDetail.html',
                    controller: 'PortfolioProjectDetailCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/market');

});
