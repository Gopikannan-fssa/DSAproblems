// finding the number in the array
function equalornot(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (x === a[i]) {
      return x + " " + "is  found in the array";
    }
  }
  return x + " " + "is not found in the array";
}

console.log(equalornot([9, 72, 01, 14, 12], 12));
