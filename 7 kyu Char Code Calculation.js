//https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x){
    let charCode = "";
    let str1,
        str2, 
        ind2 = "";
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      charCode += x.charCodeAt(i);
      str1 = charCode.split("");
      str2 = charCode.split("");
    }
    ind2 = str2.indexOf("7");
    while (ind2 != -1) {
      str2.splice(ind2, 1, "1");
      ind2 = str2.indexOf("7", ind2 + 1);
    }
    for (let k = 0; k < str1.length; k++) {
      sum += +str1[k] - +str2[k];
    }
    return sum;
  }

  // Examples
  // ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// total1 = 656667
//               ^
// total2 = 656661
//               ^

// (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6