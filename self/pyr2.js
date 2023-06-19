//    1
//  2 3 4
// 5 6 7 8 9

// n = 3;
// let num = 1;
// for (let i = 1; i <= n; i++) {
//   let space = "";
//   for (let j = 0; j <= n - i - 1; j++) {
//     space += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     space += num + " ";
//     num++;
//   }

//   console.log(num);
//   //   str += space;
// }

let n = 3;
let num = 1;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += i + " ";
    num++;
  }
  console.log(row);
}
