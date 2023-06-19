let a = [4, 5, 10, 11, 1];
k = 3;
max = [];

for (let i = 0; i < k; i++) {
  sum = 0;

  for (let j = i; j < k + i; j++) {
    sum += a[j];
  }
  max.push(sum);
}
console.log(max);

sumofmax = max[0];
for (let i = 0; i <= max.length; i++) {
  if (sumofmax < max[i]) {
    sumofmax = max[i];
  }
}
console.log(sumofmax);
