var assert = require("assert"),
    isNull = require("../src/index");


describe("isNull", function() {
    it("should return true when the value is a null", function() {
        assert.equal(isNull(undefined), false);
        assert.equal(isNull({}), false);
        assert.equal(isNull([]), false);
        assert.equal(isNull(""), false);
        assert.equal(isNull(/./), false);
        assert.equal(isNull(0), false);
        assert.equal(isNull(function noop() {}), false);

        assert.equal(isNull(null), true);
    });
});
