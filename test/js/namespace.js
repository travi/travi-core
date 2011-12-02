(function () {
    "use strict";

    TestCase("NamespaceTest", {
        tearDown: function () {
            delete travi.nstest;
        },

        "test should create non-existent object": function () {
            travi.namespace("nstest");

            assertObject(travi.nstest);
        },

        "test should not overwrite existing objects": function () {
            travi.nstest = {nested: {}};
            var result = travi.namespace("nstest.nested");

            assertSame(result, travi.nstest.nested);
        },

        "test only create missing parts": function () {
            var existing = {},
                result;
            travi.nstest = {nested: {existing: existing}};

            result = travi.namespace("nstest.nested.ui");

            assertSame(existing, travi.nstest.nested.existing);
            assertObject(travi.nstest.nested.ui);
        },

        "test fill namespace with provided object": function () {
            var provided = {subObject: {}};

            travi.namespace("nstest", provided);

            assertSame(provided, travi.nstest);
        },

        "test provided only placed at full depth namespace": function () {
            var provided = {subObject: {}},
                existing = {},
                result;
            travi.nstest = {nested: {existing: existing}};

            result = travi.namespace("nstest.nested.ui.provided", provided);

            assertSame(provided, travi.nstest.nested.ui.provided);
            assertNotSame(provided, travi.nstest.nested.ui);
            assertEquals({provided: provided}, travi.nstest.nested.ui);
        }
    });
}());