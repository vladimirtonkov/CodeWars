// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed

function jumpingNumber(n){
    if (0 <= n && n <= 9) {
    return "Jumping!!";
  }

  let count = 0;
  let num = String(n).split("");
  for (let i = 0; i < num.length; i++) {
    if (i + 1 < num.length) {
      let a = num[i] - num[i + 1];
      let b = num[i + 1] - num[i];
      if ((a === 1) | (b === 1)) {
        count++;
      }
    }
  }
  return num.length - count === 1 ? "Jumping!!" : "Not!!";
}


// Examples
// jumpingNumber(556847) ==> return "Not!!"
// Adjacent digits don't differ by 1
