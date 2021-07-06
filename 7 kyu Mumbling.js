// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    let str = s.toUpperCase().split("");
    let count = 0;
    let words = "";
    let string = "";
    for (let i = 0; i < s.length; i++) {
      string += s[i].toLowerCase();
    }
    while (count < str.length) {
      words += str[count] + string[count].repeat(count) + "-";
      count++;
    }
    return words.substring(0, words.length - 1);
  }


