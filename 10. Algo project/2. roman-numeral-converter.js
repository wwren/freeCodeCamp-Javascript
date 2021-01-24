function convertToRoman(num) {
    const lookup = {1000 : 'M', 900 : 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};

    let keysDescending = [];
    Object.keys(lookup).forEach(k => keysDescending.unshift(parseInt(k)));
    
    let romanForm = {};
    while (num > 0)
    {
        let divisor = keysDescending.find(key => key <= num);
        let factor = Math.floor(num/divisor);
        romanForm[divisor] = factor; 

        num = num%divisor;
    }
    console.log(romanForm)

    let romanNum = [];
    for (let k in romanForm)
    {
        romanNum.unshift(repeatStrN (lookup[k], romanForm[k]));
    }

 return romanNum.join('');
}

function repeatStrN (str, n)
{
    let temp = '';
    while(n > 0)
    {
        temp += str;
        n--;
    }
    return temp;
}

convertToRoman(16);


