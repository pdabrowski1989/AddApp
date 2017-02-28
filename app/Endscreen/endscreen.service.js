(function () {
    'use strict';

    angular.module('AddApp')
        .service('EndscreenService', EndscreenService);

    function EndscreenService($q, $http) {
        var eService = this;

        eService.getContent = getContent;

        /////

        function getContent() {
            var defer = $q.defer();

            var onSuccess = function (res) {
                defer.resolve(res.data)
            };
            var onError = function (err) {
                defer.reject(err)
            };

            $http.get('https://itunes.apple.com/us/app/fallout-shelter/id991153141?mt=8').then(onSuccess, onError);

            return defer.promise;
        }
    }

    EndscreenService.$inject = ['$q', '$http']
})();
