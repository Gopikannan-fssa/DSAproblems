// Program that check whether a given character is an alphabet or not.

let n = "dhsvio";

let pattern = "^[a-zA-Z]*$";

if (n.match(pattern)) {
  console.log("It is a alphanumeric");
} else {
  console.log("It is not a alphanumeric");
}
