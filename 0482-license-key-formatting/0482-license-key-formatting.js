/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let result = '';
    s = s.split('-').join('')
    let count = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(count == k - 1 && i !== 0){
            result = '-' + s[i].toUpperCase() + result;
            count = 0;
        } else {
            result = s[i].toUpperCase() + result;
            count++;
        }
    }
    return result;
};