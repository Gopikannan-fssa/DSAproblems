let numberArr = [
  [20, 10, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51],
];

let sum = 0;

for (let i = 0; i < numberArr.length; i++) {
  for (let j = 0; j < numberArr[i].length; j++) {
    sum += numberArr[i][j];
  }
}
console.log(sum);
