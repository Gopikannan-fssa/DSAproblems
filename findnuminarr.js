// // finding the number in the array
// function equalornot(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (x === a[i]) {
//       return x + " " + "is  found in the array";
//     }
//   }
//   return x + " " + "is not found in the array";
// }

// console.log(equalornot([9, 72, 01, 14, 12], 12));
let s = "07:05:45PM";
function timeConversion(s) {
  // Write your code here
  let time = s.substring(8);
  let time2 = s.substring(0, 8);
  let time3 = time2.split(":");

  if (time == "PM") {
    if (time3[0] !== "12") {
      time3[0] = parseInt(time3[0] + 12);
    }
  } else {
    if (time3[0] === "12") {
      time3[0] = "00";
    }
  }
  console.log(time3.join(":"));
}
