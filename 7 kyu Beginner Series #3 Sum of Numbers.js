// 
function getSum( a,b ) {
    if (a == b) {
     return a | b;
   }
   let sum = 0;
 
   if (a < b) {
     let count = a;
     while (count <= b) {
       sum += count;
       count++;
     }
   } else {
     let count = b;
     while (count <= a) {
       sum += count;
       count++;
     }
   }
 
   return sum;
}

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2