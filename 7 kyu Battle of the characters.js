//https://www.codewars.com/kata/595519279be6c575b5000016 

function battle(x, y) {
    let str = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let arrPairStr = [x, y];
    let one = arrPairStr[0];
    let two = arrPairStr[1];
    
    let sumX = one.split("").reduce((sum, current) => sum + str.indexOf(current), 0);
    let sumY = two.split("").reduce((sum, current) => sum + str.indexOf(current), 0);
    if (sumX > sumY) {
      return x;
    }
    if (sumX < sumY) {
      return y;
    }
    if (sumX === sumY) {
      return "Tie!";
    }
  }

  // Example
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"