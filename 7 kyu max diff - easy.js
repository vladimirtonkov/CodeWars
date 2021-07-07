// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
function maxDiff(list) {
    let sum = 0;
  let min = 9999999;
  let max = -9999999;
  if (list.length <= 1) {
    return 0;
  }
  for (let i = 0; i < list.length; i++) {
    if (max < list[i]) {
      max = list[i];
    }
    if (min > list[i]) {
      min = list[i];
    }
  }
  sum = max - min;
  return sum;
};

// Examples
// maxDiff([1, 2, 3, 4]); // return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); // return 7, because 3 - (-4) == 7