module.exports = {
    config: {
        src: [
            'Gruntfile.js',
            'grunt/**/*.js'
        ],
        directives: {
            node: true
        },
        options: {
            errorsOnly: true,
            checkstyle: 'logs/jslint-config.xml'
        }
    },
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
    },
    ui: {
        src: [
            'js/**/*.js'
        ],
        directives: {
            browser: true,
            predef: [
                '$',
                'jQuery',
                'Modernizr',
                'travi'
            ]
        },
        options: {
            errorsOnly: true,
            checkstyle: 'logs/jslint-ui.xml'
        }
    },
    uiTest: {
        src: [
            'test/ui/**/*.jstd'
        ],
        directives: {
            browser: true,
            predef: [
                '$',
                'jQuery',
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
            checkstyle: 'logs/jslint-ui-test.xml'
        }
    }
};