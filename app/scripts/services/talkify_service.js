(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name talkifyExampleModule.service:talkify
     *
     * @description
     * Description of the service talkify
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
                   .controller('SampleCtrl', [''talkify], function (talkify) {
                        this.value = 'Hello factory ' + talkify.name;
                   }]);
           </file>
       </example>
     */
    angular
        .module('talkifyExampleModule')
        .service('talkify', function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            this.name = 'talkifyService';
        });

})();