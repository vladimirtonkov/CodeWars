// https://www.codewars.com/kata/525e5a1cb735154b320002c8

function triangular( n ) {
    if (n < 1) {
    return 0;
  }
  let sum = 0;
  while (n >= 1) {
    sum += n;
    n--;
  }

  return sum;
}


// Examples
// You need to return the nth triangular number. You should return 0 for out of range values
// 1st (1)   2nd (3)    3rd (6)
    // *          **        ***
    //             *        **
    //                       *