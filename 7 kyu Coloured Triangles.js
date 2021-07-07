// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

function triangle(row) {
    let Color = ["R", "G", "B"];
    let str = "", tmp = "";
    let i = 0, k = 0;
    let arr = [];
  
    if (row.length == 1) {
      return row;
    }
  
    while (row.length > 1) {
      i = 0;
      while (i + 1 < row.length) {
        str = row[i] + row[i + 1];
        i++;
        while (k <= 2) {
          if (str[0] == Color[0] && str[1] == Color[0]) {
            tmp += Color[0];
            break;
          }
          if (str[0] == Color[1] && str[1] == Color[1]) {
            tmp += Color[1];
            //k++
            break;
          }
          if (str[0] == Color[2] && str[1] == Color[2]) {
            tmp += Color[2];
            //k++
            break;
          }
          if (str.indexOf(Color[k]) == -1) {
            tmp += Color[k];
            //k++
            break;
          }
          k++;
        }
        k = 0;
      }
      row = tmp;
      tmp = "";
    }
  
    return row;
  }

  // Examples
//   Colour here:        G G        B G        R G        B R
//   Becomes colour:      G          R          B          G

// R R G B R G B B
//  R B R G B R B
//   G G B R G G
//    G R G B G
//     B B R R
//      B G R
//       R B
//        G