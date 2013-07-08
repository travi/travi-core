var config = module.exports;

config["framework tests"] = {
    extensions: [
        require("buster-jstestdriver")
    ],

    environment: 'browser',

    libs: [
        'test/js/stubs/*.js',

        'bower_components/jquery/jquery.js',
        'bower_components/jquery.validation/jquery.validate.js',
        'bower_components/jquery-ui/ui/jquery-ui.js',
        'bower_components/jquery.form/jquery.form.js',
        'bower_components/jsrender/jsrender.js'
    ],

    sources: [
        'js/travi.js',
        'js/travi/templates.js',
        'js/travi/location.js',
        'js/travi/events.js',
        'js/travi/pagination.js',
        'js/**/*.js'
    ],

    resources: [
        'templates/**/*.tmpl',
        'test/js/templates/**/*.tmpl'
    ],

    testHelpers: [
        'test/js/tools/common.js',
        'test/js/tools/referee-jstestdriver.js',
        'test/js/resources/bootstrap.js'
    ],

    tests: [
        'test/js/**/*.js'
    ]
};
