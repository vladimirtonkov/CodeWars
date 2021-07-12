// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d
 
function killer(suspectInfo, dead) {
    let len = dead.length;
    let count = 0;
    let nameArr = [];
    let pos = 0;
    for (let suspect in suspectInfo) {
      while (pos < suspectInfo[suspect].length) {
        if (suspectInfo[suspect].indexOf(dead[count]) > -1) {
          nameArr.push(suspect);
          count++;
        }
        pos++;
      }
      count = 0;
      pos = 0;
      if (nameArr.length === dead.length) {
        return nameArr[0];
      }
    }
    return nameArr;
  }


// Example
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:
// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:
// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

