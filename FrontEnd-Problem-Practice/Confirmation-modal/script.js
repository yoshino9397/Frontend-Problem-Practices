document.querySelector(".btn-first").addEventListener("click", handleClick);

const black = document.getElementById("black");

function handleClick() {
  if (black.style.display === "none") {
    black.style.display = "flex";
  } else {
    black.style.display = "none";
  }
}

const close = document.getElementById("close");

close.addEventListener("click", handleClick);