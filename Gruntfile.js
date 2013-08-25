/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-buster');
    grunt.loadNpmTasks('grunt-jstestdriver');
    grunt.loadNpmTasks('grunt-karma');

    // Project configuration.
    grunt.initConfig({
        clean: ['client/css'],

        jslint: {
            dist: {
                src: [
                    'js/**/*.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        '$',
                        'jQuery',
                        'Modernizr',
                        'amplify',
                        'travi'
                    ]
                },
                options: {
                    errorsOnly: true,
                    checkstyle: 'logs/jslint-dist.xml'
                }
            },
            test: {
                src: [
                    'grunt.js',
                    'test/**/*.js',
                    '!test/tools/*.js',
                    '!test/stubs/*.js',
                    '!test/resources/bootstrap.js'
                ],
                directives: {
                    browser: true,
                    unparam: true,
                    predef: [
                        '$',
                        'jQuery',
                        'Modernizr',
                        'amplify',
                        'travi',

                        'sinon',
                        'assertEquals',
                        'assertSame',
                        'assertNotSame',
                        'assertString',
                        'assertObject',
                        'assertFunction',
                        'assert',
                        'refute',
                        'assertFalse',
                        'assertTrue',
                        'expectAsserts'
                    ]
                },
                options: {
                    errorsOnly: true,
                    checkstyle: 'logs/jslint-test.xml'
                }
            }
        },

        buster: {
            dist: {
                server: {
                    port: 1111
                }
            }
        },

        jstestdriver: {
            files: [
                'jsTestDriver.conf'
            ]
        },

        karma: {
            unit: {
                options: {
                    files: [
                        {pattern: 'templates/**/*.tmpl', included: false},
                        {pattern: 'test/templates/**/*.tmpl', included: false},

                        'node_modules/karma-jstd-adapter/jstd-adapter.js',
                        'bower_components/jquery/jquery.js',
                        'bower_components/jquery-ui/ui/jquery-ui.js',
                        'bower_components/jsrender/jsrender.js',
                        'test/stubs/amplifyStub.js',
                        'test/stubs/modernizrStub.js',
                        'test/stubs/momentStub.js',

                        'js/travi.js',
                        'test/tools/sinon.js',
                        'test/tools/*.js',
                        'js/travi/templates.js',
                        'test/resources/load-templates.js',
                        'js/travi/location.js',
                        'js/travi/events.js',
                        'js/travi/pagination.js',
                        'test/resources/bootstrap.js',
                        'js/**/*.js',

                        'test/stubs/ajaxStub.js',
                        'test/**/*.js'
                    ]
                },
                browsers: ['PhantomJS'],
                singleRun: true,
                reporters: [
                    'progress',
                    'junit'
                ],
                junitReporter: {
                    outputFile: 'logs/karma.xml'
                }
            }
        }
    });

    grunt.registerTask('gates', ['jslint', 'karma']);
    // Default task.
    grunt.registerTask('default', 'gates');
};