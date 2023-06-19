let n = "ajsbfjka823ur";

let pattern = "^[a-zA-Z0-9]*$";

if (n.match(pattern)) {
  console.log("It is a alphanumeric");
} else {
  console.log("It is not a alphanumeric");
}
