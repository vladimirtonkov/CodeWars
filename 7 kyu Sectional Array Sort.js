//

function sectSort(array, start, length) {
    if (arguments.length === 2) {
      for (let i = start; i < array.length; i++) {
        for (let k = start; k < array.length - 1; k++) {
          if (array[k] > array[k + 1]) {
            let tmp = array[k + 1];
            array[k + 1] = array[k];
            array[k] = tmp;
          }
        }
      }
    } else {
      for (let i = start; i < start + length; i++) {
        for (let k = start; k < start + length - 1; k++) {
          if (array[k] > array[k + 1]) {
            let tmp = array[k + 1];
            array[k + 1] = array[k];
            array[k] = tmp;
          }
        }
      }
    }
  
    return array;
  }


  // Example
//   sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5) //=> [9, 7, 1, 2, 3, 4, 5, 8, 6]