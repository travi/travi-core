travi.test.testCase('Choose Enhancement Version', (function () {
    'use strict';

    return {
        location: travi.location,
        templates: travi.templates,
        cookies: travi.cookies,
        enhancements: travi.enhancements,

        choiceListId: 'versions',

        setUp: function () {
            $('body').append('<footer></footer>');
            sinon.stub(this.location, 'refresh');
            sinon.stub(Modernizr, 'mq');
            sinon.stub(this.cookies, 'create');
            sinon.stub(this.cookies, 'value');
        },

        tearDown: function () {
            travi.test.common.restore([
                this.location.refresh,
                this.cookies.create,
                this.cookies.value,
                Modernizr.mq
            ]);
        },

        'test cookie values defined as server expects': function () {
            assertEquals('s', this.enhancements.constants().SMALL_COOKIE_VALUE);
            assertEquals('l', this.enhancements.constants().LARGE_COOKIE_VALUE);
        },

        'test mobile choice defined as external code expects': function () {
            assertEquals('small', this.enhancements.constants().SMALL_SCREEN_CHOICE);
        },

        'test desktop choice defined as external code expects': function () {
            assertEquals('large', this.enhancements.constants().LARGE_SCREEN_CHOICE);
        },

        'test basic choice defined as external code expects': function () {
            assertEquals('basic', this.enhancements.constants().BASIC_CHOICE);
        },

        'test version toggle links added to page': function () {
            this.enhancements.init();

            var choiceGroupId = 'enhancementVersion',
                choicesExplainationId = 'explainChooseVersion',
                $enhancementChoices = $('#' + this.choiceListId + ' li');

            assertEquals('switch to version', $('#' + choicesExplainationId).text());
            assertEquals(1, $('footer ul').length);

            assertEquals(this.choiceListId, $('footer ul').attr('id'));
            assertEquals(2, $enhancementChoices.length);
            assertEquals(this.enhancements.constants().BASIC_CHOICE, $enhancementChoices.eq(0).text());

            assertEquals(this.enhancements.constants().BASIC_CHOICE + 'Version', $enhancementChoices.eq(0).attr('id'));
            assertEquals(choiceGroupId, $('#' + this.choiceListId).parent().attr('id'));
            assertEquals(choiceGroupId, $('#' + choicesExplainationId).parent().attr('id'));
        },

        'test Mobile link shown when desktop version active': function () {
            this.cookies.value.returns(this.enhancements.constants().LARGE_COOKIE_VALUE);

            this.enhancements.init();

            var $enhancementChoices = $('#' + this.choiceListId + ' li');

            assertEquals('small screen', $enhancementChoices.eq(1).text().trim());
            assertEquals(this.enhancements.constants().SMALL_SCREEN_CHOICE + 'Version', $enhancementChoices.eq(1).attr('id'));
        },

        'test desktop link shown when mobile version active': function () {
            this.cookies.value.returns(this.enhancements.constants().SMALL_COOKIE_VALUE);

            this.enhancements.init();

            var $enhancementChoices = $('#' + this.choiceListId + ' li');

            assertEquals('large screen', $enhancementChoices.eq(1).text().trim());
            assertEquals(this.enhancements.constants().LARGE_SCREEN_CHOICE + 'Version', $enhancementChoices.eq(1).attr('id'));
        },

        'test Switch to Desktop version': function () {
            var constants = this.enhancements.constants();
            this.cookies.value.returns(constants.SMALL_COOKIE_VALUE);

            this.enhancements.init();
            this.cookies.create.reset();
            this.location.refresh.reset();

            $('#' + constants.LARGE_SCREEN_CHOICE + 'Version').click();

            sinon.assert.calledOnce(this.cookies.create);
            sinon.assert.calledWith(
                this.cookies.create,
                constants.ENHANCEMENT_VERSION_KEY,
                constants.LARGE_COOKIE_VALUE,
                constants.DAYS_BEFORE_ENHANCEMENT_COOKIE_EXPIRATION
            );
            sinon.assert.calledOnce(this.location.refresh);

        },

        'test Switch to Mobile version': function () {
            var constants = this.enhancements.constants();
            this.cookies.value.returns(constants.LARGE_COOKIE_VALUE);

            this.enhancements.init();
            this.cookies.create.reset();
            this.location.refresh.reset();

            $('#' + constants.SMALL_SCREEN_CHOICE + 'Version').click();

            sinon.assert.calledOnce(this.cookies.create);
            sinon.assert.calledWith(
                this.cookies.create,
                constants.ENHANCEMENT_VERSION_KEY,
                constants.SMALL_COOKIE_VALUE,
                constants.DAYS_BEFORE_ENHANCEMENT_COOKIE_EXPIRATION
            );
            sinon.assert.calledOnce(this.location.refresh);
        }
    };
}()));