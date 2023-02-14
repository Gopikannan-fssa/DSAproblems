// the problem pattern
  //    1 
  //   1 2 
  //  1 2 3
  //   2 1
  //    1

  

let n = 3;

for (let i = 1; i <= n; i++) {
  console.log(getspaces(n - i + 1) + getnumseq(i));
}
for (let i = 1; i <= n; i++) {
  console.log(getspaces(i + 1) + getnumseq_rev(n - i));
}

//console.log( getSpaces(3) + getNumSequence(1));

//console.log( getSpaces(2) + getNumSequence(2));

//console.log( getSpaces(1) + getNumSequence(3));

function getspaces(n) {
  let str = " ";
  for (let i = 1; i <= n; i++) {
    str = str + " ";
  }
  return str;
}

function getnumseq(n) {
  let num_str = " ";
  for (let i = 1; i <= n; i++) {
    num_str = num_str + i + " ";
  }
  return num_str;
}

function getnumseq_rev(n) {
  let num_str_rev = " ";
  for (let i = n; i >= 1; i--) {
    num_str_rev = num_str_rev + i + " ";
  }
  return num_str_rev;
}
console.log(getnumseq_rev());
