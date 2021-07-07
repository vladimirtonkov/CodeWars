// https://www.codewars.com/kata/5ba38ba180824a86850000f7

function solve(arr){
    let NewArr = [];
    let i = 0;
    for (let k = 0; k < arr.length; k++) {
      i = k + 1;
      while (i < arr.length) {
        if (arr[k] == arr[i]) {
          arr.splice(k, 1, "");
          break;
        }
        i++;
      }
    }
  
    for (let g = 0; g < arr.length; g++) {
      if (typeof arr[g] != "string") {
        NewArr.push(arr[g]);
      }
    }
  
    return NewArr;
  }

  // Examples
// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
//solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]