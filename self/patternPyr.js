//    1
//   1 2
//  1 2 3
// 1 2 3 4

// n=4

n = 4;
let str = "";

for (let i = 1; i <= n; i++) {
  let space = "";
  for (let j = 1; j <= n - i; j++) {
    space += " ";
  }
  for (let k = 1; k <= i; k++) {
    space += k + " ";
  }

  console.log(space);
  //   str += space;
}
