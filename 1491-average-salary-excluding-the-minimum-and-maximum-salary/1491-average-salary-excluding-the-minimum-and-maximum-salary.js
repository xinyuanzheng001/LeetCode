/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    let result = 0;
    for(let i = 0; i < salary.length; i++){
        if(salary[i] === max || salary[i] === min) continue;
        else {
            result += salary[i]
        }
    }
    return result / (salary.length - 2);
};