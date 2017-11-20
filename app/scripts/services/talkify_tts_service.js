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
        .service('talkifyTts', ['talkifyUrl', 'talkifyKey', function(talkifyUrl, talkifyKey) {
            this.name = 'talkifyTtsService';

            talkify.config.remoteService.host = talkifyUrl;
            talkify.config.remoteService.apiKey = talkifyKey;

            talkify.config.ui.audioControls = {
                enabled: true,
                container: document.getElementById("talkify-play")
            };

            var player = new talkify.TtsPlayer()
                .enableTextHighlighting();

            this.playlist = new talkify.playlist()
                .begin()
                .usingPlayer(player)
                .withRootSelector('#root')
                .build();

            this.play = function() {
                this.playlist.play();
            };

        }]);

})();