let sampleInput = "Helloosaptiyaenahpandra";
let delimiter = " ";
let stringArray = [" "];
let j = 0;

for (let i = 0; i < sampleInput.length; i++) {
  if (sampleInput[i] == delimiter) {
    j++;
    stringArray.push("");
  } else {
    stringArray[j] += sampleInput[i];
  }
}

console.log(stringArray);
