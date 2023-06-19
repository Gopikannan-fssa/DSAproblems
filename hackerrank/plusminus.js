//Print the following  lines, each to  decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros

let arr = [-4, 3, -9, 0, 4, 1];

let positiveNum = 0;
let negativeNum = 0;
let zeroNum = 0;

for (let i = 0; i < arr.length; i++) {
  if (0 < arr[i]) {
    positiveNum++;
  }
  if (0 > arr[i]) {
    negativeNum++;
  }
  if (0 == arr[i]) {
    zeroNum++;
  }
}

console.log(`Proportion of zero = ${zeroNum / arr.length}`);
console.log(`Proportion of positive num = ${positiveNum / arr.length}`);
console.log(`Proportion of negative num = ${negativeNum / arr.length}`);
