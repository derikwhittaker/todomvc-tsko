/*global module:false*/
module.exports = function(grunt) {

  var rootFolder = '../src';
  var webJsFolder = rootFolder + '/JPCycles.MVC.Web/content/js';
  var webJsTestsFolder = rootFolder + '/JPCycles.MVC.Web/content/js.tests';
  var webCssFolder = rootFolder + '/JPCycles.MVC.Web/content/css';

  // Project configuration.
  grunt.initConfig({
    // Task configuration.

    watch: {
      options: {
        spawn: false,
        interrupt: true,
        debounceDelay: 1000,
      },
      src: {
        files: [webJsFolder + '/page/**/*.js'],
        tasks: ['lint']
      },
      testSrc: {
        files: [webJsTestsFolder + '/page/**/*.js'],
        tasks: ['lintTests']
      },
      allSrc: {
          files: [webJsFolder + '/page/**/*.js', webJsTestsFolder + '/page/**/*.js'],
          tasks: ['lint', 'lintTests']
      },
    },
    jshint: {
        jshintrc: true,
        gruntfile: {
          src: 'Gruntfile.js'
        },
        src: {
            src: [webJsFolder + '/page/**/*.js', webJsFolder + '/mss/mss.pager.js']
        },
        testSrc: {
            src: [webJsTestsFolder + '/page/**/*.js']
        }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['path/to/**/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: [webCssFolder + '/master.css'] // use /**/*.css for all files
      }
    },
    karma: {
      tests: {
        configFile: 'karma.conf.js',
        preprocessors: {}, // disable coverage instrumentation locally
        reporters: ['progress'],
        colors: true,
        logLevel: 'INFO',
        singleRun: false
      }
    }
  });

  // Rather than enumarate each task lets just load them all
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('lint', ['jshint:src']);
  grunt.registerTask('lintTests', ['jshint:testSrc']);

  grunt.registerTask('watchTests', ['watch:testSrc']);

};
