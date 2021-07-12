// https://www.codewars.com/kata/595aa94353e43a8746000120

function findDeletedNumber(arr, mixArr) {
    let sumArr = arr.reduce((sum, curr) => sum + curr, 0);
    let sumMixArr = mixArr.reduce((sum, curr) => sum + curr, 0);
    return sumArr - sumMixArr;
  }

  

  // Examples
  // The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.