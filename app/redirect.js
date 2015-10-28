(function () {
    'use strict';

    angular.module('RedirectApp', ['ctConfig', 'ngMaterial'])
        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })
        .config(function ($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|chrome-extension|commercialtribe):/);
        })
        .constant('CUSTOM_WEBTOP_URLS', {
            CHROME: "https://www.google.com/chrome/browser/desktop/"
        })
        .constant('CT_URL', 'https://www.commercialtribe.net')

        .controller('AppCtrl', function ($scope, $window, $timeout, $location, Detector, WEBTOP_URLS, CUSTOM_WEBTOP_URLS, CT_URL) {


            var urlParams = $location.search();

            $scope.params = urlParams;
            $scope.downloads = angular.merge({}, WEBTOP_URLS, CUSTOM_WEBTOP_URLS);

            urlParams.to = '?google.com';
            $scope.urls = {
                description: 'CommercialTribe',
                browser: CT_URL + '' + urlParams.to,
                webtop: 'commercialtribe://' + urlParams.to,
                ipad: 'ipad.' + urlParams.to
            };

            $scope.canRunDesktop = function () {
                return Detector.isWin() || Detector.isMac();
            };

            $scope.canRunWeb = function () {
                return Detector.isChrome();
            };

            $scope.isWin = Detector.isWin;

            $scope.isWin32 = Detector.isWin32;

            $scope.isWin64 = Detector.isWin64;

            $scope.isMac = Detector.isMac;

            activate();

            function activate() {

                if (Detector.isWin32()) {
                    $scope.downloads.WEBTOP = $scope.downloads.WIN32;
                } else if (Detector.isWin64()) {
                    $scope.downloads.WEBTOP = $scope.downloads.WIN64;
                } else if (Detector.isMac()) {
                    $scope.downloads.WEBTOP = $scope.downloads.OSX64;
                }
            }
        //DOESNT WORK -
        //$scope.runInDesktop = function runInDesktop() {
        //
        //    var fallback = '';
        //
        //    if (Detector.isWin32()) {
        //        fallback = $scope.dowloads.WIN32;
        //    } else if (Detector.isWin64()) {
        //        fallback = $scope.dowloads.WIN64;
        //    } else if (Detector.isMac()) {
        //        fallback = $scope.dowloads.OSX64;
        //    }
        //    setTimeout(function () {
        //        window.location = fallback;
        //    }, 200);
        //    window.location = $scope.urls.webtop;
        //};
    })
    .service('Model', function (Detector) {

        return {
            canRunInDesktop: function () {

            },
            isChrome: isChrome,
            hasWebtop: hasWebtop
        };
    })
    .service('Detector', function ($window, $location) {

        return {
            isIpad: isIpad,
            isWin: isWin,
            isWin32: isWin32,
            isWin64: isWin64,
            isMac: isMac,
            isChrome: isChrome,
            hasWebtop: hasWebtop
        };

        function isChrome() {
            var isChromium = $window.chrome,
                vendorName = $window.navigator.vendor,
                isOpera = $window.navigator.userAgent.indexOf("OPR") > -1,
                isIEedge = $window.navigator.userAgent.indexOf("Edge") > -1;
            if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
                // is Google chrome
                return true;
            } else {
                // not Google chrome
                return false;
            }
        }

        function hasWebtop() {
            return isWin() || isMac();
        }

        function isWin() {
            return $window.navigator.platform.toLowerCase().indexOf('win') > -1;
        }

        function isWin64() {
            return ($window.navigator.userAgent.toLowerCase().indexOf('wow64') > -1 ||
            $window.navigator.userAgent.toLowerCase().indexOf('win64') > -1 );
        }

        function isWin32() {
            return isWin() && !isWin64();
        }


        function isMac() {
            //Mac68K Macintosh 68K system.
            //MacPPC Macintosh PowerPC system.
            //MacIntel
            return $window.navigator.platform.toLowerCase().indexOf('mac') > -1;
        }

        function isIpad() {
            return $window.navigator.userAgent.toLowerCase().indexOf('ipad') > -1;
        }


    });
})
();
