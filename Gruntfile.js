/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
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

        karma: {
            unit: {
                configFile: 'karma.conf.js',
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