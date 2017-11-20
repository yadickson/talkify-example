(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name talkifyExampleModule.constant:talkifyEnable
     *
     * @description
     * Description of the constant talkifyEnable
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
                   .controller('SampleCtrl', ['talkifyEnable'], function (talkifyEnable) {
                        this.value = 'Hello constant ' + talkifyEnable;
                   }]);
           </file>
       </example>
     */
    angular
        .module('talkifyExampleModule')
        .constant('talkifyEnable', true);

})();
