(function () {
    'use strict';

    angular.module('RedirectApp')

    .service('Detector', function ($window) {

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

            return isChromium !== null &&
                   isChromium !== undefined &&
                   vendorName === "Google Inc." &&
                   isOpera == false &&
                   isIEedge == false;
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
})();
