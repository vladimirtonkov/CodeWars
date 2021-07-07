// https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929
function uglifyWord(s) {
    let str = "";
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (/^[a-zA-Z]+$/.test(s[i])) {
      if (count % 2 == 0) {
        str += s[i].toUpperCase();
      } else {
        str += s[i].toLowerCase();
      }
      count++;
    } else {
      str += s[i];
      count = 0;
    }
  }

  return str;
}

// Examples
// uglify_word("aaa") === "AaA"
// uglify_word("AAA") === "AaA"
// uglify_word("BbB") === "BbB"
// uglify_word("aaa-bbb-ccc") === "AaA-BbB-CcC"
// uglify_word("AaA-BbB-CcC") === "AaA-BbB-CcC"
// uglify_word("eeee-ffff-gggg") === "EeEe-FfFf-GgGg"
// uglify_word("EeEe-FfFf-GgGg") === "EeEe-FfFf-GgGg"
// uglify_word("qwe123asdf456zxc") === "QwE123AsDf456ZxC"
// uglify_word("Hello World") === "HeLlO WoRlD
