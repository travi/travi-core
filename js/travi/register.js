travi.register = function (ns, provided, dependencies) {
    travi.namespace.call(this, ns, provided);

    travi.dependencies.checker.check('travi.' + ns, dependencies);
};