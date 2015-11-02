(function () {
    'use strict';

    angular.module('RedirectApp')

        .controller('AppCtrl', function ($scope, Detector, Linker, WEBTOP_URLS, CHROME_URL) {

            $scope.downloads = {}; //to be filled in activate()
            $scope.links = {};

            $scope.isWin = Detector.isWin;

            $scope.isWin32 = Detector.isWin32;

            $scope.isWin64 = Detector.isWin64;

            $scope.isMac = Detector.isMac;

            $scope.canRunDesktop = function () {
                return Detector.isWin() || Detector.isMac();
            };

            $scope.canRunWeb = function () {
                return Detector.isChrome();
            };

            activate();

            function activate() {

                if (Detector.isWin32()) {
                    $scope.downloads.WEBTOP = WEBTOP_URLS.WIN32;
                } else if (Detector.isWin64()) {
                    $scope.downloads.WEBTOP = WEBTOP_URLS.WIN64;
                } else if (Detector.isMac()) {
                    $scope.downloads.WEBTOP = WEBTOP_URLS.OSX64;
                }
                $scope.downloads.CHROME = CHROME_URL;

                $scope.links = Linker.getLinks();
            }
        })

})();
