// https://www.codewars.com/kata/56b8903933dbe5831e000c76
function spoonerize(words) {
    let arr = [];
    let str = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== " ") {
        str += words[i];
      } else {
        arr.push(str + " ");
        str = "";
      }
    }
    arr.push(str);
    let StringElem = "";
    for (let k = 1; k < arr.length - 1; k++) {
      StringElem += arr[k];
    }
    let FirstWord = arr[0];
    let FirstPosWord = FirstWord[0];
    let LastWord = arr[arr.length - 1];
    let LastPosWord = LastWord[0];
    FirstWord = FirstWord.split("");
    LastWord = LastWord.split("");
    FirstWord.splice(0, 1, LastPosWord);
    LastWord.splice(0, 1, FirstPosWord);
    FirstWord = FirstWord.join("") + StringElem;
    LastWord = LastWord.join("");
    return FirstWord.concat(LastWord);
  }


  // Examples
  // "pack of lies" --> "lack of pies"