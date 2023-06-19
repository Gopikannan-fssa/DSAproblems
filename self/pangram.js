function str() {
  let str = "GOPIKANNAN";
  let lowercase = str.toLowerCase();
  let alpha = "abcdefghijklmnopqrstuvxxyz";
  for (let i = 0; i < alpha.length; i++) {
    if (lowercase.includes(alpha[i]) === false) {
      return "not a pangram";
    }
  }
  return "pangram";
}
console.log(str());
