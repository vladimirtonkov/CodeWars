// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

"use strict";

function flattenAndSort(array) {
  let newArr = [].concat.apply([], array);

  return newArr.sort((a, b) => a - b);
}

// Example
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].