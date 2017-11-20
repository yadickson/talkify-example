(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name talkifyExampleModule.constant:talkifyKey
     *
     * @description
     * Description of the constant talkifyKey
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
                   .controller('SampleCtrl', ['talkifyKey'], function (talkifyKey) {
                        this.value = 'Hello constant ' + talkifyKey;
                   }]);
           </file>
       </example>
     */
    angular
        .module('talkifyExampleModule')
        .constant('talkifyKey', '8a6d3e56-9b0b-47a9-a69d-928b68559be6');

})();
