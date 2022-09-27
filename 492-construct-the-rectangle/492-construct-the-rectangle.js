/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let l = Math.floor(area ** 0.5);
    if(l === area ** 0.5) {
        return [l, l];
    }
    for(let i = l + 1; i <= area; i++) {
        let w = Math.floor(area / i);
        if(w === area / i) {
            return [i, w];
        }
    }
};