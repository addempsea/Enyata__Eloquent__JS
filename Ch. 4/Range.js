function range(start, end, step) {
  let arrRange = [];
  for (let i = start; i <= end; i += step) {
    arrRange.push(i);
  }
  return arrRange;
}

console.log(range(1, 10, 1));

function totalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(totalSum(range(1, 10, 1)));
