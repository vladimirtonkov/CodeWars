// https://www.codewars.com/kata/525f039017c7cd0e1a000a26
var palindromeChainLength = function(n) {
    let tmp = n; 
    let numRev = Number(String(n).split("").reverse().join(""));
    let count = 0;
    let num = 0;
  
    while (tmp !== numRev) {
      count++;
      num = tmp + numRev;
      tmp = num;
      numRev = Number(String(num).split("").reverse().join(""));
    }
    return count;
  };

  // Examples 
//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!