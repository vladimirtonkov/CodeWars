// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

function mygcd(x,y){
    let even = 0;
    let num = 0;
    if (x < y) {
      even = x;
      for (let k = even; k >= 1; k--) {
        if (y % k == 0 && x % k == 0) {
          num = k;
          return num;
        }
      }
    } else {
      even = y;
      for (let k = even; k >= 1; k--) {
        if (y % k == 0 && x % k == 0) {
          num = k;
          return num;
        }
      }
    }
  }

  // Example
  // Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

