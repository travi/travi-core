/*global module*/
module.exports = function (grunt) {
    'use strict';

    require('load-grunt-config')(grunt);

    grunt.registerTask('gates', ['jslint', 'karma']);
    grunt.registerTask('default', 'gates');
};