// https://www.codewars.com/kata/593c9175933500f33400003e
function multiples(m, n){
    let arrNum = [];
    let number = n;
    let count = 0;
    while (n == 0 && count < m) {
      arrNum.push(n);
      count++;
    }
  
    while (number % n == 0 && count < m) {
      arrNum.push(number);
      number += n;
      count++;
    }
    return arrNum;
  }

  // Examples
// multiples(3, 5.0)