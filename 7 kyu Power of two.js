
//https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n){
    if (n == 0) {
      return false;
    }
    if(n == 1) {
      return true;
    }
    let power = 0;
     for (let i = 1; i < n; i++) {
        power = Math.pow(2, i);
        if (power > n) {
           return false;
      }
        if (power === n) {
           return true;
      }
    }
  }


  // Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false