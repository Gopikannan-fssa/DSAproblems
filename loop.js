n = 5;
for (let i = 1; i <= n; i++) {
  let str = " ";
  for (let j = 1; j <= i; j++) {
    str = str + j + " ";
  }
  console.log(str);
}

// const n = 5;
// let num = "";
// for (let i = 1; i <= n; i++) {
//   num += i + " ";
//   console.log(num);
// }

// staircase problem 1st
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j <= n; j++) {
//     if (j < n - i - 1) {
//       console.log(" ");
//     } else {
//       console.log(i);
//     }
//   }
//   console.log();
// }
