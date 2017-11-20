module.exports = function(config) {
    config.set({

        basePath: '',
        // frameworks to use
        frameworks: ['browserify', 'mocha', 'chai'],

        // list of files / patterns to load in the browser

        files: [
            "node_modules/jquery/dist/jquery.js",
            "node_modules/angular/angular.js",
            "node_modules/angular-ui-router/release/angular-ui-router.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "node_modules/talkify-tts/dist/talkify.js",
            "app/scripts/main.js",
            "app/scripts/controllers/home_ctrl.js",
            "app/scripts/services/talkify_service.js",
            "test/spec/main_test.js",
            "test/spec/services/talkify_service_test.js",
            "test/spec/controllers/home_ctrl_test.js"
            ],

        reporters: ['progress', 'mocha', 'junit', 'coverage'],

        hostname: 'localhost',

        port: 9000,

        colors: true,

        autoWatch: true,

        browsers: ['PhantomJS'],

        preprocessors: {
            'app/scripts/**/*.js': ['coverage']
        },

        coverageReporter: {
            dir: 'coverage',
            reporters: [{
                type: 'html',
                subdir: '.'
            }]
        },

        junitReporter: {
            outputDir: 'reports',
            outputFile: 'test-results.xml',
            useBrowserName: false
        }

    });
};