// 3rd  the sum of all even numbers in the array

let a = [4, 3, 17, 10, 11];
let b = 0;

for (let i = 0; i <= a.length; i++) {
  let c = a[i];
  if (c % 2 == 0) {
    b += c;
  }
}
console.log(b);



