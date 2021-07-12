// https://www.codewars.com/kata/57e2dd0bec7d247e5600013a

function unflatten (flatArray)
{
  let posLen = 0;
  let arr = [];
  let newResArr = [];
  let countI = 0;
  for (let i = 0; i < flatArray.length; i++) {
    let num = flatArray[i];
    posLen = 0;
    countI = i;
    if (num >= 3) {
      while (posLen < num && countI < flatArray.length) {
        arr.push(flatArray[countI]);
        posLen++;
        countI++;
      }
      newResArr.push(arr);
      arr = [];
      i = countI - 1;
    } else {
      newResArr.push(num);
    }
  }

  return newResArr;
}


// Example
// [1,4,5,2,1,2,4,5,2,6,2,3,3] -> [1,[4,5,2,1],2,[4,5,2,6],2,[3,3]]

// Steps: 
// 1. The 1 is added directly to the new array.
// 2. The next number is 4. So the next 4 numbers (4,5,2,1) are added as sub-array in the new array.
// 3. The 2 is added directly to the new array.
// 4. The next number is 4. So the next 4 numbers (4,5,2,6) are added as sub-array in the new array.
// 5. The 2 is added directly to the new array.
// 6. The next number is 3. So the next 3 numbers would be taken. There are only 2, 
//    so take these (3,3) as sub-array in the new array.