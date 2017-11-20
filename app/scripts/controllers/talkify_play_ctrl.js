(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name talkifyExampleModule.controller:TalkifyPlayCtrl
     *
     * @description
     * Description of the controller TalkifyPlayCtrl
     */
    angular
        .module('talkifyExampleModule')
        .controller('TalkifyPlayCtrl', ['talkifyTts', function(talkifyTts) {

            this.runTalk = function () {
                talkifyTts.play();
            };

        }]);

})();
