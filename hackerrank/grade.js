let grades = [73, 67, 38, 33];

let arr = [];
for (let i = 0; i < grades.length; i++) {
  if (38 <= grades[i] && grades[i] % 5 == 3) {
    arr.push(grades[i] + (5 - (grades[i] % 5)));
  } else {
    arr.push(grades[i]);
  }
}
console.log(arr);

// 73+ (5 -73 %5) This will happen when the grades is grater than 38 and grades % 5 ==3
//  else print as it is
