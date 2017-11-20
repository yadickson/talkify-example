(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name talkifyExampleModule
     *
     * @requires ui.router
     *
     * @description
     * Description of the module talkifyExampleModule
     */
    angular
        .module('talkifyExampleModule', [
            'ui.router'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('root', {
                    abstract: true,
                    views: {
                        'header@': {},
                        'main@': {},
                        'footer@': {}
                    }
                })
                // inject:routes
                .state('home', {
                    parent: 'root',
                    url: '/home',
                    views: {
                        'main@': {
                            controller: 'HomeCtrl',
                            templateUrl: 'views/home.html',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('talkifyPlay', {
                    parent: 'root',
                    url: '/talkify-play',
                    views: {
                        'main@': {
                            controller: 'TalkifyPlayCtrl',
                            templateUrl: 'views/talkify_play.html',
                            controllerAs: 'vm'
                        }
                    }
                })
                // endinject
            ;

            $urlRouterProvider.otherwise('/home');

        }]);

})();