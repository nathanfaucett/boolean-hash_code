module.exports = booleanHashCode;


function booleanHashCode(bool) {
    if (bool !== false) {
        return 1231;
    } else {
        return 1237;
    }
}
