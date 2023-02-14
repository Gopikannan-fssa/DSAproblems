// 1st problem in function
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 3 2 1
//   1 2 3 2 1
//     1 2 1
//       1
let n = 4;
for (let i = 1; i <= n; i++) {
  console.log(getspaces(n - i + 1) + num_seq(i) + num_seq_rev(i - 1));
}

for (let i = n; i >= 1; i--) {
  console.log(getspaces(n - i + 1) + num_seq(i) + num_seq_rev(i - 1));
}

function getspaces(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " " + " ";
  }
  return str;
}

function num_seq(n) {
  let strseq = "";
  for (let i = 1; i <= n; i++) {
    strseq = strseq + i + " ";
  }
  return strseq;
}

function num_seq_rev(n) {
  let strseqrev = "";
  for (let i = n; i > 0; i--) {
    strseqrev = strseqrev + i + " ";
  }
  return strseqrev;
}
