// https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(num1, num2) {
    let sum = '';
    let str1 = String(num1).split("");
    let str2 = String(num2).split("");
    if (str1.length === str2.length) {
      for (let i = 0; i < str1.length; i++) {
        sum += (+str1[i]) + (+str2[i]);
      }
      return  parseInt(sum);
    }
  
    let Length = 0;
    let s1 = String(num1);
    let s2 = String(num2);
    //  let sumArr = []
    let sumStr = '';
    if (num1 < num2) {
      s1 = s1.split("");
      s2 = s2.split("");
      Length = s2.length - s1.length;
  
      for (let k = 0; k < Length; k++) {
        s1.unshift("0");
      }
  
      for (let i = 0; i < s1.length; i++) {
        sumStr += (+s1[i]) + (+s2[i]);
      }
    } else {
      s1 = s1.split("");
      s2 = s2.split("");
      Length = s1.length - s2.length;
  
      for (let k = 0; k < Length; k++) {
        s2.unshift("0");
      }
  
      for (let i = 0; i < s2.length; i++) {
        sumStr += (+s1[i]) + (+s2[i]);
      }
    }
  
    return parseInt(sumStr);
  }


  // Examples
  //   1  6
  // + 1  8
  //   2  14