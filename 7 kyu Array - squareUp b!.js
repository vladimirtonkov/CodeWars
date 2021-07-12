// https://www.codewars.com/kata/5a8bcd980025e99381000099

function squareUp(n)
{
  let arr = [];
  let arrNumCounter = [];
  let count = n;
  let num = 0;
  for (let i = 0; i < n; i++) {
    while (count >= 1) {
      num = count;
      arrNumCounter.push(num);
      count--;
    }
    arr.push(arrNumCounter);
    arrNumCounter = [];
    count = n;
  }

  let iter = n - 1;
  for (let f = 0; f < arr.length; f++) {
    for (let k = 0; k < iter; k++) {
      arr[f][k] = 0;
    }

    iter--;
  }

  return [].concat.apply([], arr);
}

// Example
// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]