// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// const findMissingNum = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + 1 != arr[i + 1]) {
//       return arr[i] + 1;
//     }
//   }

//   return false;
// };
// console.log(findMissingNum(arr));

// const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
// const duplicate = (arr) => {
//   const dup = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (dup[arr[i]]) {
//       return arr[i];
//     } else {
//       dup[arr[i]] = arr[i];
//     }
//   }
//   return false;
// };
// console.log(duplicate(arr));
function str() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
  let str = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    }
  }
}
// console.log(newarr);
