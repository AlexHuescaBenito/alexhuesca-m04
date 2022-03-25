const str = prompt("Introduce una palabra:")
const result = str.split(" ").map(word => {
  const len = word.length;
  if (len > 1) {
    word = word[len-1] +  word.substring(1, len-1) + word[0];
  }
  return word;
}).join(" ");

console.log(result)