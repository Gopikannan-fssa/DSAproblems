let n = 3;

let str = "";
for (let i = 1; i <= n; i++) {
  for (let i = n; i >= 1; i--) {
    str = str + i + " ";
  }
  str += "\n";
}
console.log(str);
