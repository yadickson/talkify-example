(function() {
    'use strict';

    describe('Controller:TalkifyPlayCtrl', function() {
        describe('Test module and controller', function() {

            // load the module
            beforeEach(angular.mock.module('talkifyExampleModule'));

            var controller,
                scope;

            var mockTalkifyTts = {
                play: sinon.spy()
            };

            // Initialize the controller and a mock scope
            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                controller = $controller('TalkifyPlayCtrl', {
                    $scope: scope,
                    talkifyTts: mockTalkifyTts
                });
            }));

            it('should runTalk is present', function() {
                expect(controller.runTalk).to.be.function;
            });

            it('check play method is call to runTalk function', function() {
                controller.runTalk();
                expect(mockTalkifyTts.play.called).to.be.true;
            });
        });
    });
})();