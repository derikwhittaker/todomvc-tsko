module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: './',

    // frameworks to use
    frameworks: ['jasmine-jquery', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
        '../bower_components/knockout/dist/knockout.debug.js',
        '../bower_components/underscore/underscore.js',
        '../bower_components/todomvc-common/base.js',

        '../js/extensions/**/*.js',
        '../js/models/**/*.js',
        '../js/app.js',

        '../specs/**/*.js',

    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    reporters: ['teamcity', 'coverage'],

    preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        '**/js/page/**/*.js': ['coverage'],
        '**/js/mss/**/*.js': ['coverage']
    },

      // optionally, configure the reporter
    coverageReporter: {
        dir: '../../../grunt/js.coverage/',
        reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: false,

    // level of logging
    logLevel: config.LOG_WARN,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers
    browsers: ['PhantomJS'],

	// Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine-jquery',
      'karma-jasmine',
      'karma-coverage',
      'karma-teamcity-reporter',
    ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
