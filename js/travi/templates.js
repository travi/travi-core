(function (travi) {
    'use strict';

    var TEMPLATE_DIRECTORY = '/templates/',
        TEMPLATE_EXT = '.tmpl',
        loadedTemplates = {};

    $.views.helpers({
        toLower: function (string) {
            return string.toLowerCase();
        }
    });

    function loadTemplate(templateName, templateUrl) {
        var promise = $.ajax({
            url: templateUrl,
            type: 'get',
            dataType: 'text',
            success: function (template) {
                $.templates(templateName, template);
            }
        });

        loadedTemplates[templateName] = promise;

        return promise;
    }

    function getTemplate(templateName, templateUrl) {
        if (loadedTemplates[templateName]) {
            return loadedTemplates[templateName];
        }
        return loadTemplate(
            templateName,
            templateUrl || TEMPLATE_DIRECTORY + templateName + TEMPLATE_EXT
        );
    }

    function preLoadTemplates(templates, pathToSingleTemplate) {
        var templateName,
            promises = [];

        if ('string' === typeof templates) {
            return getTemplate(templates, pathToSingleTemplate);
        }

        for (templateName in templates) {
            if (templates.hasOwnProperty(templateName)) {
                promises.push(getTemplate(templateName, templates[templateName]));
            }
        }

        return $.when.apply(null, promises);
    }

    function render(data, templateName) {
        return $.render[templateName](data || {});
    }

    function renderTemplate(templateName, data, callback) {
        if (callback) {
            getTemplate(templateName).done(function () {
                callback(render(data, templateName));
            });
        } else {
            return render(data, templateName);
        }
    }

    function init() {
        loadedTemplates = {};
    }

    travi.namespace('templates', {
        get: getTemplate,
        preLoad: preLoadTemplates,
        render: renderTemplate,
        init: init
    });
}(travi));