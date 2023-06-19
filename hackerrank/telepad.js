const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const input = "23";

// let num = parseInt(input);

let ar = [];
for (let i = 0; i < map[input[0]].length; i++) {
  for (let j = 0; j < map[input[1]].length; j++) {
    let output = map[input[0]][i];
    let out = (output += map[input[1]][j]);
    ar.push(out);
  }
}
console.log(ar);
