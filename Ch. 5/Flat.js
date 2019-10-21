let arrays = [[1, 2, 3], [4, 5], [6]];

function reduction(a, b) {
  return a.concat(b);
}

let arr = arrays.reduce(reduction);


console.log(arr);


