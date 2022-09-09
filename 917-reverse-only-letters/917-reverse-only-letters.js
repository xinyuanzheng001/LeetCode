/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split('');
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left].toLowerCase() !== s[left].toUpperCase() && s[right].toLowerCase() !== s[right].toUpperCase()) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
            continue;
        }
        if(s[left].toLowerCase() === s[left].toUpperCase()) {
            left++;
        }
        if(s[right].toLowerCase() === s[right].toUpperCase()) {
            right--;
        }

    }
    return s.join('')
};