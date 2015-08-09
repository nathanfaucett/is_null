var tape = require("tape"),
    isNull = require("../src/index");


tape("isNull(value) should return true when the value is a null", function(assert) {
    assert.equal(isNull(undefined), false);
    assert.equal(isNull({}), false);
    assert.equal(isNull([]), false);
    assert.equal(isNull(""), false);
    assert.equal(isNull(/./), false);
    assert.equal(isNull(0), false);
    assert.equal(isNull(function noop() {}), false);

    assert.equal(isNull(null), true);

    assert.end();
});
