  (function() {
      'use strict';

      describe('Service:talkifyTts', function() {
          describe('Test module and service', function() {

              // load the module
              beforeEach(angular.mock.module('talkifyExampleModule'));

              // Initialize the service
              beforeEach(function() {

                  angular.mock.module(function($provide) {
                      $provide.value('talkifyKey', 'key');
                      $provide.value('talkifyUrl', 'url');
                      $provide.value('talkifyEnable', false);
                  });

              });

              it('Check service talkifyTts', inject(function(talkifyTts) {
                  expect(!!talkifyTts).to.be.true;
              }));

          });
      });
  })();