// https://www.codewars.com/kata/5b728f801db5cec7320000c7
function solve(s, k){
    let a = "abcdefghijklmnopqrstuvwxyz";
    let string = s.split("");
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      for (let h = 0; h < s.length; h++) {
        if (string[h] === a[i] && count < k) {
          string.splice(h, 1, "");
          count++;
        }
      }
    }
    return string.join("");
  }

  // Examples
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''
