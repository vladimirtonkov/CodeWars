// https://www.codewars.com/kata/583ade15666df5a64e000058
// https://www.codewars.com/users/VladimirTonkov



function evensAndOdds(num){
    let str = [];
  let elem1 = num;
  let elem2 = num;
  if (num % 2 == 0) {
    while(elem1 !==  0) {
      str.push(elem1%2)
      elem1 = Math.floor(elem1/2)
    }
      let string = str.reverse().join("")
    return string;
  } else {
    let arrNum = [10, 11, 12, 13, 14, 15];
    let arrStr = ["A", "B", "C", "D", "E", "F"];

    while (elem2 > 15) {
      str.push(elem2 % 16);
      elem2 = Math.floor(elem2 / 16);
    }
    str.push(elem2);
    for (let i = 0; i < str.length; i++) {
      for (let k = 0; k < arrNum.length; k++) {
        if (str[i] == arrNum[k]) {
          str.splice(i, 1, arrStr[k]);
        }
      }
    }
    return str.reverse().join("").toLowerCase();
  }
  return num;
}