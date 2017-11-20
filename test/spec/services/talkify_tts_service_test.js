  (function() {
      'use strict';

      describe('Service:talkifyTts', function() {
          describe('Test module and service', function() {

              // load the module
              beforeEach(angular.mock.module('talkifyExampleModule'));

              var talkifyTtsService;
              // Initialize the service
              beforeEach(inject(function(_talkifyTts_) {
                  talkifyTtsService = _talkifyTts_;
              }));

              it('Check service talkifyTts', function() {
                  expect(!!talkifyTtsService).to.be.true;
              });

              it('Check talkifyTts.name', function() {
                  expect(talkifyTtsService.name).to.be.equal('talkifyTtsService');
              });
          });
      });
  })();
