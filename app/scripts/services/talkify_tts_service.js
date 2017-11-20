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
        .service('talkifyTts', function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            this.name = 'talkifyTtsService';
        });

})();
