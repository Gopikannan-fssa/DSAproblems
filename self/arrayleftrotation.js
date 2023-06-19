let arr = [1, 2, 3, 4, 5];
let d = 4;

for (let i = 1; i < d; i++) {
  number = 0;
  arr.push(arr[number]);

  arr.shift(arr[number]);

  number += 1;
}

console.log(arr);
