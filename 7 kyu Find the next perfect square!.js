// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    let sum = 0;
  
    for (let i = 1; i <= sqrt; i++) {
      sum += (2 * i - 1);
    }
  
    return sum === sq ? (sqrt + 1) * (sqrt + 1) : -1;
  }


  // Example
//   findNextSquare(121) --> returns 144
//   findNextSquare(625) --> returns 676
//   findNextSquare(114) --> returns -1 since 114 is not a perfect square