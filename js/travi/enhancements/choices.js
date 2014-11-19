travi.templates.preLoad('chooseEnhancement', '/resources/thirdparty/travi-core/templates/enhancementVersion.tmpl');

(function (travi) {
    'use strict';

    var cookies = travi.cookies,
        templates = travi.templates,
        browserProxy = travi.browserProxy,

        constants = travi.enhancements.constants.get(),
        persist = travi.enhancements.persist;


    function resetVersion() {
        cookies.remove(constants.ENHANCEMENT_VERSION_KEY);
        browserProxy.refresh();
    }

    function addLinksToChooseVersion() {
        var currentEnhancement = cookies.value(constants.ENHANCEMENT_VERSION_KEY),
            alternateEnhancement,
            alternateEnhancementText,
            alternateCommonName;

        if (currentEnhancement === constants.SMALL_COOKIE_VALUE) {
            alternateEnhancement = constants.LARGE_SCREEN_CHOICE;
            alternateEnhancementText = 'large screen';
            alternateCommonName = 'desktop';

        } else if (currentEnhancement === constants.LARGE_COOKIE_VALUE) {
            alternateEnhancement = constants.SMALL_SCREEN_CHOICE;
            alternateEnhancementText = 'small screen';
            alternateCommonName = 'mobile';
        }

        templates.render('chooseEnhancement', {
            alternateEnhancement: alternateEnhancement,
            alternateEnhancementText: alternateEnhancementText,
            alternateCommonName: alternateCommonName
        }, function (renderedTemplate) {
            $('footer').append(renderedTemplate);

            $('#' + constants.LARGE_SCREEN_CHOICE + 'Version').click(function () {
                persist.update(constants.LARGE_COOKIE_VALUE);
            });

            $('#' + constants.SMALL_SCREEN_CHOICE + 'Version').click(function () {
                persist.update(constants.SMALL_COOKIE_VALUE);
            });

            $('#detectVersion').click(resetVersion);
        });
    }

    function init() {
        addLinksToChooseVersion();
    }

    travi.namespace('enhancements.choices', {
        init: init
    });
}(travi));