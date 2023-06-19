let num = 909;
function js() {
  if (1 % num == 0) {
    console.log("num is not prime");
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "num is not a prime";
    } else {
      return "num is prime";
    }
  }
}
console.log(js(num));
