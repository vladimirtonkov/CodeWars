// https://www.codewars.com/kata/57d1f36705c186d018000813
// https://www.codewars.com/users/VladimirTonkov


function gordon(a){
    let vowels = "eiou".toUpperCase(); //гласные
  a = a.toUpperCase().split("");
  a.push("!!!!");
  for (let k = 0; k < a.length; k++) {
    if ((a[k] === "a") | (a[k] === "A")) {
      a.splice(k, 1, "@");
    }
    if (vowels.indexOf(a[k]) > -1) {
      a.splice(k, 1, "*");
    }
    if (a[k] === " ") {
      a.splice(k, 1, "!!!! ");
    }
  }
  return a.join("");
}