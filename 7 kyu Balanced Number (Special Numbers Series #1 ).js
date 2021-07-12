// https://www.codewars.com/kata/5a4e3782880385ba68000018

function balancedNum(number) {
    if (0 <= number && number <= 99) {
   return "Balanced";
 }
 let str = String(number);
 let strLength = String(number).length;
 let middle = Math.floor(strLength / 2);
 if (strLength % 2 == 1) {
   let oddNumber1 = 0;
   let oddNumber2 = 0;
   for (let i = 0; i < middle; i++) {
     oddNumber1 += +str[i];
   }
   for (let k = middle + 1; k < str.length; k++) {
     oddNumber2 += +str[k];
   }

   return oddNumber1 == oddNumber2 ? "Balanced" : "Not Balanced";
 } else {
   let evenNumber1 = 0;
   let evenNumber2 = 0;
   for (let i = 0; i < middle - 1; i++) {
     evenNumber1 += +str[i];
   }
   for (let k = middle + 1; k < str.length; k++) {
     evenNumber2 += +str[k];
   }
   return evenNumber1 == evenNumber2 ? "Balanced" : "Not Balanced";
 }
}


// Examples
// (balanced-num 295591) ==> return "Not Balanced"
// Since , The sum of all digits to the left of the middle digits (11)
// and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced
