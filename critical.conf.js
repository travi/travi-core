module.exports = function (config) {
    config.set({
        frameworks: ['referee'],

        files: [
            {pattern: 'templates/**/*.tmpl', included: false},

            'bower_components/travi-test-utils/tools/assert-cache.js',
            'node_modules/karma-jstd-adapter/jstd-adapter.js',
            'bower_components/travi-test-utils/tools/assert-fix.js',

            'bower_components/travi-test-utils/stubs/modernizrStub.js',

            'js/travi.js',
            'bower_components/travi-test-utils/tools/*.js',
            'js/travi/browserProxy.js',
            'js/travi/cookies.js',
            'bower_components/travi-test-utils/test-init.js',
            'js/travi/enhancements/constants.js',
            'js/travi/enhancements/persist.js',
            'js/travi/enhancements/detection.js',

            'test/cookies.jstd',
            'test/enhancements/screenSize.jstd',
            'test/namespace.jstd',
            'test/critical.jstd'
        ],

        exclude: [
            'bower_components/travi-test-utils/tools/cucumber-world.js'
        ],

        browsers: ['PhantomJS']
    });
};
