travi.test.testCase('PubSubTests', (function (global) {
    'use strict';

    return {
        common: travi.test.common,
        events: travi.events,

        eventName: 'some-event',
        callback: function () {
            return;
        },
        data: {},

        setUp: function () {
            sinon.stub(global.amplify, 'publish');
            sinon.stub(global.amplify, 'subscribe');
            sinon.stub(global.amplify, 'unsubscribe');
        },

        tearDown: function () {
            this.common.restore([
                global.amplify.publish,
                global.amplify.subscribe,
                global.amplify.unsubscribe
            ]);
        },

        'test publish mapped to amplify': function () {
            this.events.publish(this.eventName, this.data);

            sinon.assert.calledOnce(amplify.publish);
            sinon.assert.calledWith(amplify.publish, this.eventName, this.data);
        },

        'test subscribe mapped to amplify': function () {
            this.events.subscribe(this.eventName, this.callback);

            sinon.assert.calledOnce(amplify.subscribe);
            sinon.assert.calledWith(amplify.subscribe, this.eventName, this.callback);
        },

        'test unsubscribe mapped to amplify': function () {
            this.events.unsubscribe(this.eventName, this.callback);

            sinon.assert.calledOnce(amplify.unsubscribe);
            sinon.assert.calledWith(amplify.unsubscribe, this.eventName, this.callback);
        }
    };
}(this)));