// 1 2 3 4 5

let arr = [1, 2, 3, 4, 5];

let Arr = arr.sort();
let str = 0;
for (let i = 0; i < Arr.length; i++) {
  str += Arr[i];
}

let max = str - Arr[0];
let min = str - Arr[Arr.length - 1];

console.log(max, min);
