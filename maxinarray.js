// to find tha minimum num in an array [1, 7, 39, 32, 88, 93, 19, 239]

let a = [1, 7, 39, 32, 88, 93, 19, 239];

max = a[0];
for (let i = 0; i < a.length; i++) {
  if (max <= a[i]) {
    max = a[i];
  }
  // } else {
  //   max = a[i];
  // }
  console.log(max);
}
