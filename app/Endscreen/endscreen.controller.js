(function () {
    'use strict';

    angular.module('AddApp')
        .controller('EndscreenCtrl', EndscreenCtrl);

    function EndscreenCtrl($mdMedia, EndscreenService) {
        var eCtrl = this;

        eCtrl.icon = '';
        eCtrl.images = {
            portrait: [],
            landscape: []
        };
        eCtrl.mdMedia = $mdMedia;
        eCtrl.getContent = EndscreenService.getContent;
        eCtrl.setContent = setContent();

        /////

        function setContent() {
            var onSuccess = function (res) {
                var imgs = $(res).find('img');

                for (var i = 0; i < imgs.length; i++) {
                    if (imgs[i].className === 'landscape') {
                        eCtrl.images.landscape.push(imgs[i])
                    } else if (imgs[i].className === 'portrait') {
                        eCtrl.images.portrait.push(imgs[i])
                    } else if (imgs[i].className === 'artwork' && imgs[i].alt === 'Fallout Shelter') {
                        eCtrl.icon = imgs[i].getAttribute('src-swap-high-dpi');
                    }
                }

                console.log(eCtrl.images )
            };
            var onError = function (err) {
                console.log(err)
            };

            eCtrl.getContent().then(onSuccess, onError);
        }
    }

    EndscreenCtrl.$inject = ['$mdMedia', 'EndscreenService'];
})();
