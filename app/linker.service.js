(function () {
    'use strict';

    angular.module('RedirectApp')

        .service('Linker', function ($location, LINK_WEB, LINK_WEBTOP) {

            return {
                getLinks: function () {
                    var urlParams = $location.search();
                    urlParams.to = urlParams.to || '';
                    return {
                        web: LINK_WEB + urlParams.to,
                        webtop: LINK_WEBTOP + urlParams.to,
                        ipad: 'ipad.' + urlParams.to
                    };
                }
            };
        });
})();
