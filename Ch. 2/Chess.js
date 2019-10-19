var position = "";

for (let j = 0; j < 8; j++) {
  for (let i = 0; i < 8; i++) {
    if ((i + j) % 2 == 0) {
      position += " ";
    } else {
      position += "#";
    }
  }
  position += "\n";
}

console.log(position);
