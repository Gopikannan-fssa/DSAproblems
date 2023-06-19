let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

let sum = 0;
let sum2 = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i][i];
  for (let j = arr.length - 1 - i; j >= arr.length - 1 - i; j--) {
    sum2 += arr[i][j];
  }
}

if (sum > sum2) {
  console.log(sum - sum2);
} else {
  console.log(sum2 - sum);
}
