// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    let str = String(num);
    let number = "";
    for (let k = 0; k < str.length; k++) {
      // number += (+str[k]) * (+str[k])
      number += Math.pow(+str[k], 2);
    }
    return Number(number);
  }

  // Examples
// if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.