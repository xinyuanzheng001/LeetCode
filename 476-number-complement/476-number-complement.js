/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let num_binary = num.toString(2);
    let complement_binary = '';
    for(const char of num_binary){
        if(char === '0') {
            complement_binary += '1'
        } else {
            complement_binary += '0'
        }
    }
    complement_binary = parseInt(complement_binary, 2).toString(10);
    return complement_binary;
};