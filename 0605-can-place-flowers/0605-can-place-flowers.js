/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    let helper = function(bed) {
        let count = 0;
        for(let i = 0; i < bed.length; i++) {
            if(bed[i] === 0) {
                count++;
            } else break;
        }
        return count;
    }
    let num_0 = 0;
    let result = flowerbed.length === 1 && flowerbed[0] === 0 ? 1 : 0;
    while(i < flowerbed.length) {
        if(flowerbed[i] === 0){
            num_0 = helper(flowerbed.slice(i))
            if(i === 0 || i + num_0 > flowerbed.length - 1) {
                result += Math.floor(num_0 / 2)
            } else {
                result += num_0 % 2 === 0 ? num_0 / 2 - 1 : Math.floor(num_0 / 2);
            }
            i += num_0
        } else {
            i++;
        }
    }
    return flowerbed.includes(1) ? result >= n : Math.ceil(flowerbed.length / 2) >= n;
};