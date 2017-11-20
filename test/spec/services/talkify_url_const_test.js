(function() {
    'use strict';

    describe('Constant:talkifyUrl', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('talkifyExampleModule'));

            var TALKIFY_URL_CONST;
            // Initialize the service
            beforeEach(inject(function(_talkifyUrl_) {
                TALKIFY_URL_CONST = _talkifyUrl_;
            }));

            it('Check value', function() {
                expect(TALKIFY_URL_CONST).to.be.equal('https://talkify.net');
            });
        });
    });
})();