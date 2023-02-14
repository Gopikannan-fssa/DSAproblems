n = 11;

for (let i = 3; i <= n - 6; i = i + 2) {
  console.log(up_triangle(i));
}
for (let i = n; i >= 1; i = i - 2) {
  console.log(right_space(n - i) + reverse_pyramid(i));
}

function reverse_pyramid(n) {
  let str = "";
  for (let i = n; i >= 1; i--) {
    str += " " + "*";
  }
  return str;
}

function right_space(n) {
  let space = "";
  for (let i = 1; i <= n; i++) {
    space += " ";
  }
  return space;
}

function up_triangle(n) {
  let tri = "";
  for (let i = 1; i <= n; i++) {
    tri += " " + "*";
  }
  return tri;
}
function up_triangle_rev(n) {
  let rev_tri = "";
  for (let i = n - 8; i >= n; i--) {
    rev_tri += " " + "*";
  }
  return rev_tri;
}
