//https://www.codewars.com/kata/58aed2cafab8faca1d000e20

function modifiedSum(a, n) {
    let resultArrPow = a.reduce((sum, current) => sum += (current ** n), 0);
    let resultArr = a.reduce((sum, current) => sum + current, 0);
     return resultArrPow - resultArr
  }


  // Examples
//   {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
//   {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30