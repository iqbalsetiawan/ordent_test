/*
    You live in the city of Cartesia where all roads are laid out in a perfect grid.
    You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
    The city provides its citizens with a Walk Generating App on their phones:
    Every time you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
    You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block.
    So, please create a function that will return true if the walk the app gives you will take you
    exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/

function isValidWalk(walk) {
  // kondisi length array agar tidak lebih dari 10
  if (walk.length !== 10) return false;

  // buat variabel untuk arah mata angin yang segaris
  let northSouth = 0;
  let eastWest = 0;

  // looping
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      // jika menuju n / u, increment 1
      case "n":
        northSouth++;
        break;
      // jika menuju s / s, decrement 1
      case "s":
        northSouth--;
        break;
      // jika menuju e / t, increment 1
      case "e":
        eastWest++;
        break;
      // jika menuju w / b, decrement 1
      case "w":
        eastWest--;
        break;
      default:
    }
  }

  // return untuk memastikan masing2 mata angin bernilai 0 (sebagai tanda user kembali ke titik awal)
  return northSouth === 0 && eastWest === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])); // false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
