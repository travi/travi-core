/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-buster');
    grunt.loadNpmTasks('grunt-jstestdriver');

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
                        'travi',
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
        }
    });

    // Default task.
    grunt.registerTask('default', 'jslint');
    grunt.registerTask('gates', ['jslint', 'jstestdriver']);
};