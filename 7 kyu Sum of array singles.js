// https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count = i + 1;
      while (count < arr.length) {
        if (arr[i] == arr[count]) {
          arr.splice(i, 1, 0);
          arr.splice(count, 1, 0);
          break;
        }
        count++;
      }
    }
    let result = arr.reduce((sum, current) => sum + current, 0);
    
    return result;
  };


  // Examples 
//   repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.