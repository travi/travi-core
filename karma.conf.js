module.exports = function (config) {
    config.set({
        frameworks: ['referee'],

        files: [
            {pattern: 'templates/**/*.tmpl', included: false},
            {pattern: 'test/templates/**/*.tmpl', included: false},

            'node_modules/karma-jstd-adapter/jstd-adapter.js',
            'bower_components/jquery/jquery.js',
            'bower_components/jquery-ui/ui/jquery-ui.js',
            'bower_components/jsrender/jsrender.js',
            'bower_components/jquery-form/jquery.form.js',
            'bower_components/travi-test-utils/stubs/amplifyStub.js',
            'bower_components/travi-test-utils/stubs/modernizrStub.js',
            'bower_components/travi-test-utils/stubs/momentStub.js',

            'js/travi.js',
            'bower_components/travi-test-utils/tools/common.js',
            'js/travi/templates.js',
            'test/resources/load-templates.js',
            'js/travi/location.js',
            'js/travi/events.js',
            'js/travi/pagination.js',
            'bower_components/travi-test-utils/test-init.js',
            'js/**/*.js',

            'bower_components/travi-test-utils/stubs/ajaxStub.js',

            'test/**/*.js',
            'test/**/*.jstd'
        ],

        browsers: ['PhantomJS']
    });
};