travi.templates.preLoad('chooseEnhancement', '/resources/thirdparty/travi-core/templates/enhancementVersion.tmpl');

(function (travi) {
    "use strict";

    var templates = travi.templates,
        cookies = travi.cookies,
        location = travi.location,

        ENHANCEMENT_VERSION_KEY = 'ev',
        DAYS_BEFORE_ENHANCEMENT_COOKIE_EXPIRATION = 10,
        SMALL_SCREEN_CHOICE = 'small',
        LARGE_SCREEN_CHOICE = 'large',
        BASIC_CHOICE = 'basic',
        SMALL_COOKIE_VALUE = 's',
        LARGE_COOKIE_VALUE = 'l';

    function setEnhancementVersionTo(versionKey) {
        cookies.create(
            ENHANCEMENT_VERSION_KEY,
            versionKey,
            DAYS_BEFORE_ENHANCEMENT_COOKIE_EXPIRATION
        );
        location.refresh();
    }

    function resetVersion() {
        cookies.remove(ENHANCEMENT_VERSION_KEY);
        location.refresh();
    }

    function detectEnhancementVersion() {
        if (Modernizr.mq('only screen and (min-width: 320px) and (max-width: 480px)')) {
            setEnhancementVersionTo(SMALL_COOKIE_VALUE);
        } else {
            setEnhancementVersionTo(LARGE_COOKIE_VALUE);
        }
    }

    function determineSvgSupport() {
        cookies.create(
            'svg',
            Modernizr.svg ? 't' : 'f',
            DAYS_BEFORE_ENHANCEMENT_COOKIE_EXPIRATION
        );
    }

    function setInitialEnhancementVersion() {
        if (!cookies.exists(ENHANCEMENT_VERSION_KEY)) {
            determineSvgSupport();
            detectEnhancementVersion();
        }
    }

    function addLinksToChooseVersion() {
        var currentEnhancement = cookies.value(ENHANCEMENT_VERSION_KEY),
            alternateEnhancement,
            alternateEnhancementText,
            alternateCommonName;

        if (currentEnhancement === SMALL_COOKIE_VALUE) {
            alternateEnhancement = LARGE_SCREEN_CHOICE;
            alternateEnhancementText = 'large screen';
            alternateCommonName = 'desktop';

        } else if (currentEnhancement === LARGE_COOKIE_VALUE) {
            alternateEnhancement = SMALL_SCREEN_CHOICE;
            alternateEnhancementText = 'small screen';
            alternateCommonName = 'mobile';
        }

        templates.render('chooseEnhancement', {
            alternateEnhancement: alternateEnhancement,
            alternateEnhancementText: alternateEnhancementText,
            alternateCommonName: alternateCommonName
        }, function (renderedTemplate) {
            $('footer').append(renderedTemplate);

            $('#' + LARGE_SCREEN_CHOICE + 'Version').click(function () {
                setEnhancementVersionTo(LARGE_COOKIE_VALUE);
            });

            $('#' + SMALL_SCREEN_CHOICE + 'Version').click(function () {
                setEnhancementVersionTo(SMALL_COOKIE_VALUE);
            });

            $('#detectVersion').click(resetVersion);
        });
    }

    function getConstants() {
        return {
            ENHANCEMENT_VERSION_KEY: ENHANCEMENT_VERSION_KEY,
            DAYS_BEFORE_ENHANCEMENT_COOKIE_EXPIRATION: DAYS_BEFORE_ENHANCEMENT_COOKIE_EXPIRATION,
            SMALL_SCREEN_CHOICE: SMALL_SCREEN_CHOICE,
            LARGE_SCREEN_CHOICE: LARGE_SCREEN_CHOICE,
            BASIC_CHOICE: BASIC_CHOICE,
            LARGE_COOKIE_VALUE: LARGE_COOKIE_VALUE,
            SMALL_COOKIE_VALUE: SMALL_COOKIE_VALUE
        };
    }

    function init() {
        setInitialEnhancementVersion();
        addLinksToChooseVersion();
    }

    travi.namespace('enhancements', {
        constants: getConstants,
        init: init
    });

    init();
}(travi));