//  https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n)
{
  if (n == 0) {
    return "0.00";
  } else if (n == 1) {
    return "1.00";
  }

  let dec = 4;
  let count = 2;
  let sum = 1 + 1 / 4;
  while (count < n) {
    dec = dec + 3;
    sum += 1 / dec;
    count++;
  }
  return sum.toFixed(2);
}


// Example
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"