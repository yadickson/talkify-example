  (function() {
      'use strict';

      describe('Service:talkify', function() {
          describe('Test module and service', function() {

              // load the module
              beforeEach(angular.mock.module('talkifyExampleModule'));

              var talkifyService;
              // Initialize the service
              beforeEach(inject(function(_talkify_) {
                  talkifyService = _talkify_;
              }));

              it('Check service talkify', function() {
                  expect(!!talkifyService).to.be.true;
              });

              it('Check talkify.name', function() {
                  expect(talkifyService.name).to.be.equal('talkifyService');
              });
          });
      });
  })();
