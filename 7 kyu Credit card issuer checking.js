// https://www.codewars.com/kata/5701e43f86306a615c001868

function getIssuer(number) {
    let len = String(number).length;
  
    let V = +String(number).split("").splice(0, 1).join("");
    let A = +String(number).split("").splice(0, 2).join("");
    let M = +String(number).split("").splice(0, 2).join("");
    let D = +String(number).split("").splice(0, 4).join("");
  
    if (A >= 34 && A <= 37 && len == 15) {
      return "AMEX";
    }
    else if (D == 6011 && len == 16) {
      return "Discover";
    }
    else if (M >= 51 && M <= 55 && len == 16) {
      return "Mastercard";
    }
    else if (V == 4 && len == 13 || V == 4 && len == 16) {
      return "VISA";
    }
  
    return "Unknown";
  }


  // Example
//   | Card Type  | Begins With          | Number Length |
//   |------------|----------------------|---------------|
//   | AMEX       | 34 or 37             | 15            |
//   | Discover   | 6011                 | 16            |
//   | Mastercard | 51, 52, 53, 54 or 55 | 16            |
//   | VISA       | 4                    | 13 or 16      |