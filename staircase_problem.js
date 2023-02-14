// Reverse num staircase

const n = 4;

let num = "";
for (let i = 1; i <= n; i++) {
  let outnum = n;
  for (let j = 5; j <= n; j++, outnum--) {
    if (j < n - i + 1) {
      num += " " + " ";
    } else {
      num += outnum + " ";
    }
  }
  num += "\n";
}

console.log(num);
