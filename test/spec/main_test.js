(function() {
  'use strict';

  describe('Check application', function() {

    describe('Application', function() {

      var moduleApp = angular.module('talkifyExampleModule');

      it('Check application module', function() {
        expect(moduleApp).to.exist;
        expect(moduleApp).to.not.null;
      });
    });

    describe('Application Dependencies', function() {

      var dependencies = angular.module('talkifyExampleModule').requires;

      it('Check ui-route', function() {
        expect(dependencies).to.be.an('array').that.includes('ui.router');
      });
    });

    describe('Application Mock', function() {

      var moduleApp = angular.mock.module('talkifyExampleModule');

      it('Check application module mock', function() {
        expect(moduleApp).to.exist;
        expect(moduleApp).to.not.null;
      });
    });

  });
})();
