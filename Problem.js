// For n = 4
// Problem 1
// 1           1
// 1 2       2 1
// 1 2 3   3 2 1
// 1 2 3 4 3 2 1

let n = 4;

for (let i = 1; i <= n; i++) {
  console.log(
    num_total(i) + num_space(n - i + 1) + num_space(n - i) + seq_double(i)
  );
}

for (let i = 3; i < n; i++) {
  console.log(num_seq(i + 1) + num_seq_rev(i));
}

//Spaces loop
function num_space(n) {
  let space = "";
  for (let i = 1; i <= n; i++) {
    space += "  ";
  }
  return space;
}

//Normal staircse

function num_total(n) {
  let number_total = "";
  for (let i = 1; i < n; i++) {
    number_total += i + " ";
  }
  return number_total;
}

//Reverse number staircase
function seq_double(n) {
  let numdouble = "";
  for (let i = n - 1; i >= 1; i--) {
    numdouble += i + " ";
  }

  return numdouble;
}

//Last horizontal normal num

function num_seq(n) {
  let number = "";
  for (let i = 1; i <= n; i++) {
    number += i + " ";
  }
  return number;
}

//Last horizontal reverse normal num
function num_seq_rev(n) {
  let rev_num = "";
  for (let i = n; i >= 1; i--) {
    rev_num += i + " ";
  }
  return rev_num;
}

// let n = 4;
// function numspace(n) {
//   let space = "";
//   for (let i = 1; i <= n; i++) {
//     space += "  ";
//   }
//   return space;
// }

// for (let i = 1; i <= n; i++) {
//   console.log(numspace(i - 1) + i);
// }

// for (let j = 3; j >= 1; j--) {
//   console.log(numspace(n - j + (n - 1)) + j);
// }

//reverse staircase
// let n = 4;

// for (let i = n; i >= 1; i--) {
//   let str = "";

//   for (let j = i; j >= 1; j--) {
//     str += j + " ";
//   }
//   console.log(str);
// }

//
