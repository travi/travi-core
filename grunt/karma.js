module.exports = {
    unit: {
        configFile: 'karma.conf.js',
        singleRun: true,

        preprocessors: {
            "js/**/!(utilities).js": 'coverage'
        },

        reporters: [
            'progress',
            'junit',
            'coverage'
        ],

        junitReporter: {
            outputFile: 'logs/karma.xml'
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'logs/coverage/'
        }
    },
    ui: {
        configFile: 'ui.conf.js',
        singleRun: true,

        preprocessors: {
            "js/travi/ui/**/*.js": 'coverage'
        },

        reporters: [
            'progress',
            'junit',
            'coverage'
        ],

        junitReporter: {
            outputFile: 'logs/ui.xml'
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'logs/coverage/'
        }
    }
};