// https://www.codewars.com/kata/5c3433a4d828182e420f4197

const ultimateReverse = s => {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
      arr.push(s[i].length);
    }
    let arrStr = s.join("");
    let str = [];
    let count = 0;
    let newArr = arrStr.split("");
    let NewArrStr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
      NewArrStr.push(newArr[i]);
    }
  
    for (let k = 0; k < s.length; k++) {
      let len = arr[count];
      let tmpStr = NewArrStr.splice(k, len, "");
      str[k] = tmpStr.join("");
      count++;
    }
  
    return str;
  };

  // Examples
  // Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
//   Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}