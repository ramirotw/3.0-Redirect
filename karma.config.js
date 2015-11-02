module.exports = function(config) {
    config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-material/angular-material.js',

        //dev deps
        'bower_components/angular-mocks/angular-mocks.js',

        'app/*module.js',
        'app/*.js',
        'test/*spec.js' //we keep them in a separate folder because the /app is served directly - we don't want to serve tests
    ],

    exclude: [
        'app/vendor/*.js'
    ],

    preprocessors: {
      'app/*!(*spec).js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    //For computers that take longer to start the browser
    browserNoActivityTimeout: 100000,

    coverageReporter: {
        dir: './test/coverage/',
        reporters: [
            {type: 'html'},
            {type: 'text-summary'},
            {type: 'cobertura'}
        ]
    }
  });
};
