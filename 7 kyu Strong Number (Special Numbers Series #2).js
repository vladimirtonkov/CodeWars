// https://www.codewars.com/kata/5a4d303f880385399b000001

function strong(n) {
    let str = String(n);
    let num = 0;
    let sum = 0;
  
    for (let i = 0; i < str.length; i++) {
      num = +str[i];
      if (!isNaN(num)) {
        let multNumber = 1;
        while (num > 1) {
          multNumber *= num;
          num--;
          if (multNumber > n) {
            return "Not Strong !!";
          }
        }
        sum += multNumber;
      }
    }
    if (sum == n) {
      return "STRONG!!!!";
    } else {
      return "Not Strong !!";
    }
  }


  // Examples
  // strong_num(123) ==> return "Not Strong !!"
  // Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123) , Then it's Not Strong .
