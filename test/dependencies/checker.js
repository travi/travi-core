travi.test.testCase('Dependency Checker Tests', (function () {
    'use strict';

    return {
        'test module exists': function () {
            assertObject(travi.dependencies.checker);
        }
    };
}()));