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
    $scope.handleTopButton = function() {
        if (!$scope.showFilters) {
            $scope.gotoCreateNew();
        } else {
            //window.location.reload();
        }
    }
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('PortfolioDetailCtrl', function($scope, $location, $stateParams, Portfolios, Person) {
    var currentID = $stateParams.portfolioId;
    $scope.portfolios = Portfolios.getAll();
    $scope.currentPerson = Person.get(currentID);

    $scope.getFirstName = function(fullName) {
        return fullName.split(' ')[0];
    }

})

.controller('PortfolioProjectDetailCtrl', function($scope, $location, $stateParams, $sce, Portfolios, Person) {
    var currentID = $stateParams.portfolioId;
    $scope.portfolios = Portfolios.getAll();
    $scope.currentPortfolio = Portfolios.get(currentID);
    $scope.currentPerson = Person.get($scope.currentPortfolio.creator_id);

    $scope.prepareUrlForIframe = function (url){
    	return $sce.trustAsResourceUrl(url);
    }

})

.controller('PortfolioCtrl', function($scope, Portfolios, Person) {
    $scope.portfolios = Portfolios.getAll();
    $scope.people = Person.getAll();
    $scope.currentTab = "Portfolios";
    $scope.showGrid = false;

    $scope.handleTopButton = function() {
    	$scope.showGrid = !$scope.showGrid;
    }

    $scope.markCurrentTab = function(tabName) {
        if (tabName === $scope.currentTab) {
            return true;
        } else {
            return false;
        }
    }

    $scope.setCurrentTab = function(tabName) {
        $scope.currentTab = tabName;
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


/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})*/

.controller('ChatDetailCtrl', ['$scope', '$rootScope', '$state',
    '$stateParams', 'MockService', '$ionicActionSheet',
    '$ionicPopup', '$ionicScrollDelegate', '$timeout', '$interval',
    function($scope, $rootScope, $state, $stateParams, MockService,
        $ionicActionSheet,
        $ionicPopup, $ionicScrollDelegate, $timeout, $interval) {

        // mock acquiring data via $stateParams
        $scope.toUser = {
            _id: '534b8e5aaa5e7afc1b23e69b',
            pic: 'http://ionicframework.com/img/docs/venkman.jpg',
            username: 'Moris Freiburghaus'
        }

        // this could be on $rootScope rather than in $stateParams
        $scope.user = {
            _id: '534b8fb2aa5e7afc1b23e69c',
            pic: 'http://ionicframework.com/img/docs/mcfly.jpg',
            username: 'Marty'
        };

        $scope.input = {
            message: localStorage['userMessage-' + $scope.toUser._id] || ''
        };

        var messageCheckTimer;

        var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
        var footerBar; // gets set in $ionicView.enter
        var scroller;
        var txtInput; // ^^^

        $scope.$on('$ionicView.enter', function() {
            getMessages();

            $timeout(function() {
                footerBar = document.body.querySelector('.bar-footer');
                scroller = document.body.querySelector('.scroll-content');
                txtInput = angular.element(footerBar.querySelector('textarea'));
            }, 0);
        });

        $scope.$on('$ionicView.leave', function() {
            // Make sure that the interval is destroyed
            if (angular.isDefined(messageCheckTimer)) {
                $interval.cancel(messageCheckTimer);
                messageCheckTimer = undefined;
            }
        });

        $scope.$on('$ionicView.beforeLeave', function() {
            if (!$scope.input.message || $scope.input.message === '') {
                localStorage.removeItem('userMessage-' + $scope.toUser._id);
            }
        });

        function getMessages() {
            // the service is mock but you would probably pass the toUser's GUID here
            MockService.getUserMessages({
                toUserId: $scope.toUser._id
            }).then(function(data) {
                $scope.doneLoading = true;
                $scope.messages = data.messages;

                $timeout(function() {
                    viewScroll.scrollBottom();
                }, 0);
            });
        }

        $scope.$watch('input.message', function(newValue, oldValue) {
            if (!newValue) newValue = '';
            localStorage['userMessage-' + $scope.toUser._id] = newValue;
        });

        $scope.sendMessage = function(sendMessageForm) {
            var message = {
                toId: $scope.toUser._id,
                text: $scope.input.message
            };

            // if you do a web service call this will be needed as well as before the viewScroll calls
            // you can't see the effect of this in the browser it needs to be used on a real device
            // for some reason the one time blur event is not firing in the browser but does on devices
            keepKeyboardOpen();

            //MockService.sendMessage(message).then(function(data) {
            $scope.input.message = '';

            message._id = new Date().getTime(); // :~)
            message.username = $scope.user.username;
            message.userId = $scope.user._id;
            message.pic = $scope.user.picture;

            $scope.messages.push(message);

            $timeout(function() {
                keepKeyboardOpen();
                viewScroll.scrollBottom(true);
            }, 0);

            $timeout(function() {
                $scope.messages.push(MockService.getMockMessage());
                keepKeyboardOpen();
                viewScroll.scrollBottom(true);
            }, 10);

            //});
        };

        // this keeps the keyboard open on a device only after sending a message, it is non obtrusive
        function keepKeyboardOpen() {
            console.log('keepKeyboardOpen');
            txtInput.one('blur', function() {
                console.log('textarea blur, focus back on it');
                txtInput[0].focus();
            });
        }

        // I emit this event from the monospaced.elastic directive, read line 480
        $scope.$on('taResize', function(e, ta) {
            console.log('taResize');
            if (!ta) return;

            var taHeight = ta[0].offsetHeight;
            console.log('taHeight: ' + taHeight);

            if (!footerBar) return;

            var newFooterHeight = taHeight + 10;
            newFooterHeight = (newFooterHeight > 44) ? newFooterHeight : 44;

            footerBar.style.height = newFooterHeight + 'px';
            scroller.style.bottom = newFooterHeight + 'px';
        });

    }
])

// services
.factory('MockService', ['$http', '$q',
    function($http, $q) {
        var me = {};

        me.getUserMessages = function(d) {
            var deferred = $q.defer();

            setTimeout(function() {
                deferred.resolve(getMockMessages());
            }, 1500);

            return deferred.promise;
        };

        me.getMockMessage = function() {
            return {
                userId: '534b8e5aaa5e7afc1b23e69b',
                date: new Date(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            };
        }

        return me;
    }
])


function getMockMessages() {
    return {
        "messages": [{
            "_id": "535d625f898df4e80e2a125e",
            "text": "Ionic has changed the game for hybrid app development.",
            "userId": "534b8fb2aa5e7afc1b23e69c",
            "date": "2014-04-27T20:02:39.082Z",
            "read": true,
            "readDate": "2014-12-01T06:27:37.944Z"
        }, {
            "_id": "535f13ffee3b2a68112b9fc0",
            "text": "I like Ionic better than ice cream!",
            "userId": "534b8e5aaa5e7afc1b23e69b",
            "date": "2014-04-29T02:52:47.706Z",
            "read": true,
            "readDate": "2014-12-01T06:27:37.944Z"
        }, {
            "_id": "546a5843fd4c5d581efa263a",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "userId": "534b8fb2aa5e7afc1b23e69c",
            "date": "2014-11-17T20:19:15.289Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.328Z"
        }, {
            "_id": "54764399ab43d1d4113abfd1",
            "text": "Am I dreaming?",
            "userId": "534b8e5aaa5e7afc1b23e69b",
            "date": "2014-11-26T21:18:17.591Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.337Z"
        }, {
            "_id": "547643aeab43d1d4113abfd2",
            "text": "Is this magic?",
            "userId": "534b8fb2aa5e7afc1b23e69c",
            "date": "2014-11-26T21:18:38.549Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.338Z"
        }, {
            "_id": "547815dbab43d1d4113abfef",
            "text": "Gee wiz, this is something special.",
            "userId": "534b8e5aaa5e7afc1b23e69b",
            "date": "2014-11-28T06:27:40.001Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.338Z"
        }, {
            "_id": "54781c69ab43d1d4113abff0",
            "text": "I think I like Ionic more than I like ice cream!",
            "userId": "534b8fb2aa5e7afc1b23e69c",
            "date": "2014-11-28T06:55:37.350Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.338Z"
        }, {
            "_id": "54781ca4ab43d1d4113abff1",
            "text": "Yea, it's pretty sweet",
            "userId": "534b8e5aaa5e7afc1b23e69b",
            "date": "2014-11-28T06:56:36.472Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.338Z"
        }, {
            "_id": "5478df86ab43d1d4113abff4",
            "text": "Wow, this is really something huh?",
            "userId": "534b8fb2aa5e7afc1b23e69c",
            "date": "2014-11-28T20:48:06.572Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.339Z"
        }, {
            "_id": "54781ca4ab43d1d4113abff1",
            "text": "Create amazing apps - ionicframework.com",
            "userId": "534b8e5aaa5e7afc1b23e69b",
            "date": "2014-11-29T06:56:36.472Z",
            "read": true,
            "readDate": "2014-12-01T06:27:38.338Z"
        }],
        "unread": 0
    };
}







! function(a, b) {
    "function" == typeof define && define.amd ? define([], function() {
        return a.returnExportsGlobal = b()
    }) : "object" == typeof exports ? module.exports = b() : a.Autolinker = b()
}(this, function() {
    var a = function(b) {
        a.Util.assign(this, b), this.matchValidator = new a.MatchValidator
    };
    return a.prototype = {
        constructor: a,
        urls: !0,
        email: !0,
        twitter: !0,
        newWindow: !0,
        stripPrefix: !0,
        className: "",
        htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,
        matcherRegex: function() {
            var a = /(^|[^\w])@(\w{1,15})/,
                b = /(?:[\-;:&=\+\$,\w\.]+@)/,
                c = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
                d = /(?:www\.)/,
                e = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
                f = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
                g = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
            return new RegExp(["(", a.source, ")", "|", "(", b.source, e.source, f.source, ")", "|", "(", "(?:", "(", c.source, e.source, ")", "|", "(?:", "(.?//)?", d.source, e.source, ")", "|", "(?:", "(.?//)?", e.source, f.source, ")", ")", "(?:" + g.source + ")?", ")"].join(""), "gi")
        }(),
        charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
        link: function(b) {
            var c = this,
                d = this.getHtmlParser(),
                e = this.htmlCharacterEntitiesRegex,
                f = 0,
                g = [];
            return d.parse(b, {
                processHtmlNode: function(a, b, c) {
                    "a" === b && (c ? f = Math.max(f - 1, 0) : f++), g.push(a)
                },
                processTextNode: function(b) {
                    if (0 === f)
                        for (var d = a.Util.splitAndCapture(b, e), h = 0, i = d.length; i > h; h++) {
                            var j = d[h],
                                k = c.processTextNode(j);
                            g.push(k)
                        } else g.push(b)
                }
            }), g.join("")
        },
        getHtmlParser: function() {
            var b = this.htmlParser;
            return b || (b = this.htmlParser = new a.HtmlParser), b
        },
        getTagBuilder: function() {
            var b = this.tagBuilder;
            return b || (b = this.tagBuilder = new a.AnchorTagBuilder({
                newWindow: this.newWindow,
                truncate: this.truncate,
                className: this.className
            })), b
        },
        processTextNode: function(a) {
            var b = this;
            return a.replace(this.matcherRegex, function(a, c, d, e, f, g, h, i, j) {
                var k = b.processCandidateMatch(a, c, d, e, f, g, h, i, j);
                if (k) {
                    var l = b.createMatchReturnVal(k.match, k.matchStr);
                    return k.prefixStr + l + k.suffixStr
                }
                return a
            })
        },
        processCandidateMatch: function(b, c, d, e, f, g, h, i, j) {
            var k, l = i || j,
                m = "",
                n = "";
            if (c && !this.twitter || f && !this.email || g && !this.urls || !this.matchValidator.isValidMatch(g, h, l)) return null;
            if (this.matchHasUnbalancedClosingParen(b) && (b = b.substr(0, b.length - 1), n = ")"), f) k = new a.match.Email({
                matchedText: b,
                email: f
            });
            else if (c) d && (m = d, b = b.slice(1)), k = new a.match.Twitter({
                matchedText: b,
                twitterHandle: e
            });
            else {
                if (l) {
                    var o = l.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                    o && (m = o, b = b.slice(1))
                }
                k = new a.match.Url({
                    matchedText: b,
                    url: b,
                    protocolUrlMatch: !!h,
                    protocolRelativeMatch: !!l,
                    stripPrefix: this.stripPrefix
                })
            }
            return {
                prefixStr: m,
                suffixStr: n,
                matchStr: b,
                match: k
            }
        },
        matchHasUnbalancedClosingParen: function(a) {
            var b = a.charAt(a.length - 1);
            if (")" === b) {
                var c = a.match(/\(/g),
                    d = a.match(/\)/g),
                    e = c && c.length || 0,
                    f = d && d.length || 0;
                if (f > e) return !0
            }
            return !1
        },
        createMatchReturnVal: function(b, c) {
            var d;
            if (this.replaceFn && (d = this.replaceFn.call(this, this, b)), "string" == typeof d) return d;
            if (d === !1) return c;
            if (d instanceof a.HtmlTag) return d.toString();
            var e = this.getTagBuilder(),
                f = e.build(b);
            return f.toString()
        }
    }, a.link = function(b, c) {
        var d = new a(c);
        return d.link(b)
    }, a.match = {}, a.Util = {
        abstractMethod: function() {
            throw "abstract"
        },
        assign: function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        },
        extend: function(b, c) {
            var d = b.prototype,
                e = function() {};
            e.prototype = d;
            var f;
            f = c.hasOwnProperty("constructor") ? c.constructor : function() {
                d.constructor.apply(this, arguments)
            };
            var g = f.prototype = new e;
            return g.constructor = f, g.superclass = d, delete c.constructor, a.Util.assign(g, c), f
        },
        ellipsis: function(a, b, c) {
            return a.length > b && (c = null == c ? ".." : c, a = a.substring(0, b - c.length) + c), a
        },
        indexOf: function(a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b);
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        },
        splitAndCapture: function(a, b) {
            if (!b.global) throw new Error("`splitRegex` must have the 'g' flag set");
            for (var c, d = [], e = 0; c = b.exec(a);) d.push(a.substring(e, c.index)), d.push(c[0]), e = c.index + c[0].length;
            return d.push(a.substring(e)), d
        }
    }, a.HtmlParser = a.Util.extend(Object, {
        htmlRegex: function() {
            var a = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
                b = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
                c = /(?:".*?"|'.*?'|[^'"=<>`\s]+)/,
                d = b.source + "(?:\\s*=\\s*" + c.source + ")?";
            return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", d, "|", c.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(" + a.source + ")", "(?:", "\\s+", d, ")*", "\\s*/?", ">", ")"].join(""), "gi")
        }(),
        parse: function(a, b) {
            b = b || {};
            for (var c, d = b.processHtmlNode || function() {}, e = b.processTextNode || function() {}, f = this.htmlRegex, g = 0; null !== (c = f.exec(a));) {
                var h = c[0],
                    i = c[1] || c[3],
                    j = !!c[2],
                    k = a.substring(g, c.index);
                k && e(k), d(h, i.toLowerCase(), j), g = c.index + h.length
            }
            if (g < a.length) {
                var l = a.substring(g);
                l && e(l)
            }
        }
    }), a.HtmlTag = a.Util.extend(Object, {
        whitespaceRegex: /\s+/,
        constructor: function(b) {
            a.Util.assign(this, b), this.innerHtml = this.innerHtml || this.innerHTML
        },
        setTagName: function(a) {
            return this.tagName = a, this
        },
        getTagName: function() {
            return this.tagName || ""
        },
        setAttr: function(a, b) {
            var c = this.getAttrs();
            return c[a] = b, this
        },
        getAttr: function(a) {
            return this.getAttrs()[a]
        },
        setAttrs: function(b) {
            var c = this.getAttrs();
            return a.Util.assign(c, b), this
        },
        getAttrs: function() {
            return this.attrs || (this.attrs = {})
        },
        setClass: function(a) {
            return this.setAttr("class", a)
        },
        addClass: function(b) {
            for (var c, d = this.getClass(), e = this.whitespaceRegex, f = a.Util.indexOf, g = d ? d.split(e) : [], h = b.split(e); c = h.shift();) - 1 === f(g, c) && g.push(c);
            return this.getAttrs()["class"] = g.join(" "), this
        },
        removeClass: function(b) {
            for (var c, d = this.getClass(), e = this.whitespaceRegex, f = a.Util.indexOf, g = d ? d.split(e) : [], h = b.split(e); g.length && (c = h.shift());) {
                var i = f(g, c); - 1 !== i && g.splice(i, 1)
            }
            return this.getAttrs()["class"] = g.join(" "), this
        },
        getClass: function() {
            return this.getAttrs()["class"] || ""
        },
        hasClass: function(a) {
            return -1 !== (" " + this.getClass() + " ").indexOf(" " + a + " ")
        },
        setInnerHtml: function(a) {
            return this.innerHtml = a, this
        },
        getInnerHtml: function() {
            return this.innerHtml || ""
        },
        toString: function() {
            var a = this.getTagName(),
                b = this.buildAttrsStr();
            return b = b ? " " + b : "", ["<", a, b, ">", this.getInnerHtml(), "</", a, ">"].join("")
        },
        buildAttrsStr: function() {
            if (!this.attrs) return "";
            var a = this.getAttrs(),
                b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c + '="' + a[c] + '"');
            return b.join(" ")
        }
    }), a.MatchValidator = a.Util.extend(Object, {
        invalidProtocolRelMatchRegex: /^[\w]\/\//,
        hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
        uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
        hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
        isValidMatch: function(a, b, c) {
            return b && !this.isValidUriScheme(b) || this.urlMatchDoesNotHaveProtocolOrDot(a, b) || this.urlMatchDoesNotHaveAtLeastOneWordChar(a, b) || this.isInvalidProtocolRelativeMatch(c) ? !1 : !0
        },
        isValidUriScheme: function(a) {
            var b = a.match(this.uriSchemeRegex)[0];
            return "javascript:" !== b && "vbscript:" !== b
        },
        urlMatchDoesNotHaveProtocolOrDot: function(a, b) {
            return !(!a || b && this.hasFullProtocolRegex.test(b) || -1 !== a.indexOf("."))
        },
        urlMatchDoesNotHaveAtLeastOneWordChar: function(a, b) {
            return a && b ? !this.hasWordCharAfterProtocolRegex.test(a) : !1
        },
        isInvalidProtocolRelativeMatch: function(a) {
            return !!a && this.invalidProtocolRelMatchRegex.test(a)
        }
    }), a.AnchorTagBuilder = a.Util.extend(Object, {
        constructor: function(b) {
            a.Util.assign(this, b)
        },
        build: function(b) {
            var c = new a.HtmlTag({
                tagName: "a",
                attrs: this.createAttrs(b.getType(), b.getAnchorHref()),
                innerHtml: this.processAnchorText(b.getAnchorText())
            });
            return c
        },
        createAttrs: function(a, b) {
            var c = {
                    href: b
                },
                d = this.createCssClass(a);
            return d && (c["class"] = d), this.newWindow && (c.target = "_blank"), c
        },
        createCssClass: function(a) {
            var b = this.className;
            return b ? b + " " + b + "-" + a : ""
        },
        processAnchorText: function(a) {
            return a = this.doTruncate(a)
        },
        doTruncate: function(b) {
            return a.Util.ellipsis(b, this.truncate || Number.POSITIVE_INFINITY)
        }
    }), a.match.Match = a.Util.extend(Object, {
        constructor: function(b) {
            a.Util.assign(this, b)
        },
        getType: a.Util.abstractMethod,
        getMatchedText: function() {
            return this.matchedText
        },
        getAnchorHref: a.Util.abstractMethod,
        getAnchorText: a.Util.abstractMethod
    }), a.match.Email = a.Util.extend(a.match.Match, {
        getType: function() {
            return "email"
        },
        getEmail: function() {
            return this.email
        },
        getAnchorHref: function() {
            return "mailto:" + this.email
        },
        getAnchorText: function() {
            return this.email
        }
    }), a.match.Twitter = a.Util.extend(a.match.Match, {
        getType: function() {
            return "twitter"
        },
        getTwitterHandle: function() {
            return this.twitterHandle
        },
        getAnchorHref: function() {
            return "https://twitter.com/" + this.twitterHandle
        },
        getAnchorText: function() {
            return "@" + this.twitterHandle
        }
    }), a.match.Url = a.Util.extend(a.match.Match, {
        urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
        protocolRelativeRegex: /^\/\//,
        protocolPrepended: !1,
        getType: function() {
            return "url"
        },
        getUrl: function() {
            var a = this.url;
            return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (a = this.url = "http://" + a, this.protocolPrepended = !0), a
        },
        getAnchorHref: function() {
            var a = this.getUrl();
            return a.replace(/&amp;/g, "&")
        },
        getAnchorText: function() {
            var a = this.getUrl();
            return this.protocolRelativeMatch && (a = this.stripProtocolRelativePrefix(a)), this.stripPrefix && (a = this.stripUrlPrefix(a)), a = this.removeTrailingSlash(a)
        },
        stripUrlPrefix: function(a) {
            return a.replace(this.urlPrefixRegex, "")
        },
        stripProtocolRelativePrefix: function(a) {
            return a.replace(this.protocolRelativeRegex, "")
        },
        removeTrailingSlash: function(a) {
            return "/" === a.charAt(a.length - 1) && (a = a.slice(0, -1)), a
        }
    }), a
});
