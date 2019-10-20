let p = document.getElementById("main");
let size;

function setSize(newSize) {
  size = newSize;
  p.style.fontSize = size + "px";
}
setSize(10);

mainBody.addEventListener("keydown", handleArrow);

function handleArrow(event) {
  if (event.key === "ArrowUp") {
    if (size > 100) {
      p.textContent = "💥";
      mainBody.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 2);
      event.preventDefault();
    }
  } else if (event.key === "ArrowDown") {
    setSize(size * 0.5);
    event.preventDefault();
  }
}

