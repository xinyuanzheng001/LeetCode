/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length === 1) {
        return duration;
    }
    let result = 0;
    for(let i = 1; i < timeSeries.length; i++) {
        if(timeSeries[i] - timeSeries[i - 1] >= duration) {
            result += duration;
        }else{
            result += timeSeries[i] - timeSeries[i - 1];
        }
    }
    return result + duration;
};