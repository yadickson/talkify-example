(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name talkifyExampleModule.controller:HomeCtrl
     *
     * @description
     * Description of the controller HomeCtrl
     */
    angular
        .module('talkifyExampleModule')
        .controller('HomeCtrl', function() {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Mocha'
            ];
        });

})();
