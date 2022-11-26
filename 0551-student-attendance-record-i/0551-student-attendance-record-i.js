/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return !(s.includes('LLL') || s.length - s.split('A').join('').length >= 2)
};