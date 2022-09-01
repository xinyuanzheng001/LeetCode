/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let data = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M'
    }
    let result = '';
    num = String(num);
    if(num in data){
        return data[num];
    }
    let n = num.length - 1;
    for(let char of num){
        let temp;
        if(char === '0') {
            n--;
            continue
        }
        if(char === '4') {
            temp = data[String(10**n)] + data[String(5*10**n)]
        } else if(char === '9') {
            temp = data[String(10**n)] + data[String(10**(n+1))]
        } else if(Number(char) < 4) {
            temp = data[String(10**(n))].repeat(Number(char))
        } else if(Number(char) < 9) {
            temp = data[String(5 * 10**(n))] + data[String(10**n)].repeat(Number(char) - 5)
        } else {
            temp = data[String(5 * 10**n)]
        }
        n--;
        result += temp;
    }
    return result;
};