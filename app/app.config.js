(function () {
    'use strict';

    angular.module('RedirectApp')
        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })
        .config(function ($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|chrome-extension|commercialtribe):/);
        })
        .constant('CHROME_URL', 'https://www.google.com/chrome/browser/desktop/')
        .constant('LINK_WEBTOP', 'commercialtribe://')
        .factory('LINK_WEB', function(WEBTOP_URLS) {
            var urls = {
                DEV: 'https://dev3.commercialtribe.net/#/',
                QA: 'https://qa3.commercialtribe.net/#/',
                STAGE: 'https://stage3.commercialtribe.net/#/',
                PROD: 'https://www.commercialtribe.net/#/'
            },
                u = WEBTOP_URLS.WIN32,
                envs = ['DEV', 'QA', 'STAGE', 'PROD'];


            for (var i = 0; i < envs.length; i++ ){
                if(u.indexOf(envs[i]) > -1) { return urls[envs[i]]; }
            }

            throw error('undetected env');
        });

})();
