module.exports = booleanHashCode;


function booleanHashCode(bool) {
    if (bool) {
        return 1231;
    } else {
        return 1237;
    }
}
