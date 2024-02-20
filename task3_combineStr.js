/*
    Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
    Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
    E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
    Note: You can expect all of the inputs to be the same length.
*/

function combineStr(str1, str2, str3) {
  // variabel penampung
  let result = "";
  // lakukan looping untuk salah satu parameter dengan
  // asumsi semua parameter memiliki length yang sama
  for (let i = 0; i < str1.length; i++) {
    // inputkan string per-index ke dalam variabel penampung
    result += str1.charAt(i) + str2.charAt(i) + str3.charAt(i);
  }
  return result;
}

console.log(combineStr("aa", "bb", "cc")); // abcabc
console.log(combineStr("abc", "def", "ghi")); // adgbehcfi
