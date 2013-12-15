module.exports = {
    unit: {
        configFile: 'karma.conf.js',
        singleRun: true,

        reporters: [
            'progress',
            'junit'
        ],

        junitReporter: {
            outputFile: 'logs/karma.xml'
        }
    }
};