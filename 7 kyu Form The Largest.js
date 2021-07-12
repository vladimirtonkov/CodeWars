// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e

function maxNumber(n){
    let str = String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("");
    return Number(str);
  }


  // Examples
  // maxNumber (7389) ==> return (9873)
  // As 9873 is _The Maximum number _ could be formed from the digits of the number 7389 .

