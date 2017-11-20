(function() {
    'use strict';

    describe('Constant:talkifyKey', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('talkifyExampleModule'));

            var TALKIFY_KEY_CONST;
            // Initialize the service
            beforeEach(inject(function(_talkifyKey_) {
                TALKIFY_KEY_CONST = _talkifyKey_;
            }));

            it('Check value', function() {
                expect(TALKIFY_KEY_CONST).to.be.equal('TALKIFY_KEY_CONST');
            });
        });
    });
})();