(function() {
    'use strict';

    describe('Constant:talkifyEnable', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('talkifyExampleModule'));

            var TALKIFY_ENABLE_CONST;
            // Initialize the service
            beforeEach(inject(function(_talkifyEnable_) {
                TALKIFY_ENABLE_CONST = _talkifyEnable_;
            }));

            it('Check value', function() {
                expect(TALKIFY_ENABLE_CONST).to.be.true;
            });
        });
    });
})();