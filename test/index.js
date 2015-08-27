var tape = require("tape"),
    booleanHashCode = require("..");


tape("booleanHashCode(boolean: Boolean) should return hash code for boolean", function(assert) {
    assert.equals(booleanHashCode(true), 1231);
    assert.equals(booleanHashCode(false), 1237);
    assert.end();
});
