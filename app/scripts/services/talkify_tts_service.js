(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name talkifyExampleModule.service:talkifyTts
     *
     * @description
     * Description of the service talkifyTts
     *
     * @example
       <example module="talkifyExampleModule">
           <file name="index.html">
              <div data-ng-controller='SampleCtrl'>
                {{value}}
              </div>
           </file>
           <file name="script.js">
               angular
                   .module('talkifyExampleModule', [])
                   .controller('SampleCtrl', ['talkifyTts'], function (talkifyTts) {
                        this.value = 'Hello factory ' + talkifyTts.name;
                   }]);
           </file>
       </example>
     */
    angular
        .module('talkifyExampleModule')
        .service('talkifyTts', ['talkifyUrl', 'talkifyKey', 'talkifyEnable', function(talkifyUrl, talkifyKey, talkifyEnable) {

            talkify.config.remoteService.host = talkifyUrl;
            talkify.config.remoteService.apiKey = talkifyKey;

            talkify.config.ui.audioControls = {
                enabled: talkifyEnable,
                container: document.getElementById("talkify-play")
            };

            this.play = function() {

                var player = new talkify.TtsPlayer()
                    .enableTextHighlighting();

                var playlist = new talkify.playlist()
                    .begin()
                    .usingPlayer(player)
                    .withRootSelector('#root')
                    .build()
                    .play();
            };

        }]);

})();