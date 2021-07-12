// https://www.codewars.com/kata/5697fb83f41965761f000052

function filterLongWords(sentence, n) {
    let arrWords = [];
    let arr = sentence.split(" ");
    for (let str of sentence.split(" ")) {
      if (str.length > n) {
        arrWords.push(str);
      }
    }
    return arrWords;
  }


  // Example
  // filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']