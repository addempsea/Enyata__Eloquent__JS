for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 == 0) output += "Fizz";
  if (i % 5 == 0) output += "Buzz";
  document.write(output || (n + "<br>"));
}