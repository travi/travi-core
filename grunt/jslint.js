module.exports = {
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
};