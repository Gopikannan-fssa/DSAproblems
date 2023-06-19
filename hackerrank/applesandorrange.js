let s = 7;
let t = 11;
let apples = [-2, 2, 1];
let appleArr = [];
let count = 0;
let count1 = 0;
for (let i = 0; i < apples.length; i++) {
  appleArr.push(apples[i] + 5);
  if (s <= appleArr[i] && t >= appleArr[i]) {
    count++;
  }
}

console.log(appleArr);

let orrange = [5, -6];
let orrangeArr = [];
for (let i = 0; i < orrange.length; i++) {
  orrangeArr.push(orrange[i] + 15);
  if (s <= orrangeArr[i] && t >= orrangeArr[i]) {
    count1++;
  }
}
console.log(orrangeArr);

console.log(count);
console.log(count1);
