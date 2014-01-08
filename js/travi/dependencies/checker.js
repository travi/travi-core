(function (travi) {
    'use strict';

    var moduleStatuses = {};

    function getDeferred(namespace) {
        return travi.getFromObject(moduleStatuses, namespace.split('.'));
    }

    function getModule(namespace) {
        var parts = namespace.split('.');

        parts.shift();

        return travi.getFromObject(travi, parts);
    }

    function initAndResolve(module, namespace, dependencies) {
        var dependency,
            references = {};

        if (module.init) {
            for (dependency in dependencies) {
                if (dependencies.hasOwnProperty(dependency)) {
                    references[dependency] = getModule(dependencies[dependency]);
                }
            }

            module.init(references);
        }

        getDeferred(namespace).resolve();
    }

    function getPromiseListForDependencies(dependencies) {
        var promises = [],
            deferred,
            dependency;

        for (dependency in dependencies) {
            if (dependencies.hasOwnProperty(dependency)) {
                deferred = new $.Deferred();

                travi.putInObject(moduleStatuses, dependencies[dependency], deferred);
                promises.push(deferred.promise());
            }
        }

        return promises;
    }

    function ensureDependenciesAreLoaded(dependencies) {
        return $.when.apply(null, getPromiseListForDependencies(dependencies));
    }

    function checkIfLoaded(namespace, dependencies) {
        var module = getModule(namespace);

        if (module) {
            if (dependencies) {
                ensureDependenciesAreLoaded(dependencies).then(function () {
                    initAndResolve(module, namespace, dependencies);
                });
            } else {
                initAndResolve(module, namespace);
            }
        }
    }

    function check(namespace, dependencies) {
        travi.putInObject(moduleStatuses, namespace, new $.Deferred());

        checkIfLoaded(namespace, dependencies);

        return getDeferred(namespace).promise();
    }

    function init() {
        moduleStatuses = {};
    }

    travi.namespace('dependencies.checker', {
        init: init,
        check: check
    });
}(travi));