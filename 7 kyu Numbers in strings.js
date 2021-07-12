// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

function solve(s){
    let maxNum = -999999;
    let arr = [];
    let str = s.split("");
    let numStr = "";
    for (let i = 0; i <= str.length; i++) {
      if (typeof +str[i] == "number" && !isNaN(+str[i])) {
        numStr += str[i];
      } else {
        arr.push(numStr);
        numStr = "";
      }
    }
  
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] == "") {
        arr.splice(k, 1);
        k--;
      }
    }
  
    for (let m = 0; m < arr.length; m++) {
      if (+arr[m] > maxNum) {
        maxNum = +arr[m];
      }
    }
  
    return maxNum;
  };


  // Examples
  // solve("gh12cdy695m1") = 695