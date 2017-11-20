(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name talkifyExampleModule.constant:talkifyUrl
     *
     * @description
     * Description of the constant talkifyUrl
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
                   .controller('SampleCtrl', ['talkifyUrl'], function (talkifyUrl) {
                        this.value = 'Hello constant ' + talkifyUrl;
                   }]);
           </file>
       </example>
     */
    angular
        .module('talkifyExampleModule')
        .constant('talkifyUrl', 'https://talkify.net');

})();
