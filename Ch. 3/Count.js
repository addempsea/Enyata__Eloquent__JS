function countBs(word) {
  let count = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "B") {
      count.push(i);
    }
  }
  return count.length;
}

console.log(countBs("BBabBtunde"));


// To test for any other character
function countBs(word, letter) {
  let count = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      count.push(i);
    }
  }
  return count.length;
}

console.log(countBs("BBabBtunde", "B"));