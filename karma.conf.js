module.exports = function (config) {
    config.set({
        frameworks: ['referee'],

        files: [
            {pattern: 'templates/**/*.tmpl', included: false},

            'bower_components/travi-test-utils/tools/assert-cache.js',
            'node_modules/karma-jstd-adapter/jstd-adapter.js',
            'bower_components/travi-test-utils/tools/assert-fix.js',

            'bower_components/jquery/dist/jquery.js',
            'bower_components/jsrender/jsrender.js',
            'bower_components/jquery-form/jquery.form.js',
            'bower_components/travi-test-utils/stubs/amplifyStub.js',
            'bower_components/travi-test-utils/stubs/modernizrStub.js',
            'bower_components/travi-test-utils/stubs/momentStub.js',

            'js/travi.js',
            'bower_components/travi-test-utils/tools/*.js',
            'js/travi/templates.js',
            'test/resources/load-templates.js',
            'js/travi/browserProxy.js',
            'js/travi/events.js',
            'js/travi/cookies.js',
            'js/travi/dependencies/*.js',
            'js/travi/enhancements/constants.js',
            'js/travi/enhancements/persist.js',
            'js/travi/enhancements/detection.js',
            'js/travi/enhancements.js',
            'bower_components/travi-test-utils/test-init.js',
            'js/**/*.js',

            'bower_components/travi-test-utils/stubs/ajaxStub.js',

            'test/**/*.jstd'
        ],

        exclude: [
            'bower_components/travi-test-utils/tools/cucumber-world.js'
        ],

        browsers: ['PhantomJS']
    });
};
