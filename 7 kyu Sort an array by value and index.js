// https://www.codewars.com/kata/58e0cb3634a3027180000040

function sortByValueAndIndex(array)
{
  let count = 1;
  let index = 0;
  let arr = [];
  while (count <= array.length) {
    arr.push(array[index] * count);
    count++;
    index++;
  }
  let obj = {};
  let pos = 1;
  for (let i = 0; i < arr.length; i++) {
    obj[pos] = arr[i];
    pos++;
  }

  let ResArr = [];
  for (let ind in obj) {
    ResArr.push([ind, obj[ind]]);
  }

  ResArr = ResArr.sort((a, b) => a[1] - b[1]);
  let res = [].concat.apply([], ResArr);

  let NewResArr = [];
  let even = 0;
  let notEven = 1;
  for (let i = 0; i < res.length; i++) {
    if (notEven < res.length && even < res.length) {
      NewResArr.push(res[notEven] / res[even]);
      notEven += 2;
      even += 2;
    }
  }

  return NewResArr;
}

// Example
// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5