module.exports = function (config) {
    config.set({
        frameworks: ['referee'],

        files: [
            {pattern: 'templates/**/*.tmpl', included: false},

            'bower_components/travi-test-utils/tools/assert-cache.js',
            'node_modules/karma-jstd-adapter/jstd-adapter.js',
            'bower_components/travi-test-utils/tools/assert-fix.js',

            'bower_components/travi-test-utils/stubs/modernizrStub.js',

            'dist/travi-critical.min.js',
            'bower_components/travi-test-utils/tools/*.js',
            'bower_components/travi-test-utils/test-init.js',

            'test/cookies.jstd',
            'test/enhancements/screenSize.jstd'
        ],

        exclude: [
            'bower_components/travi-test-utils/tools/cucumber-world.js'
        ],

        browsers: ['PhantomJS']
    });
};
