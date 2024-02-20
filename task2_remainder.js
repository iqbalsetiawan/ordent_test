/* 
    Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
    Division by zero should return “NaN”.
    Example:
    n = 17
    m = 5
    result = 2 (remainder of `17 / 5`)
    n = 13
    m = 72
    result = 7 (remainder of `72 / 13`)
    n = 0
    m = -1
    result = 0 (remainder of `0 / -1`)
    n = 0
    m = 1
    result - division by zero (refer to the specifications on how to handle this in your language)
*/

function remainder(num1, num2) {
  // kondisi jika num1 besar dari num2, maka cari modulo num1 dari num2
  if (num1 > num2) return num1 % num2;
  // jika sebaliknya, maka cari modulo num2 dari num1
  return num2 % num1;
}

console.log(remainder(17, 5)); // 2
console.log(remainder(13, 72)); // 7
console.log(remainder(0, -1)); // 0
console.log(remainder(0, 1)); // NaN
