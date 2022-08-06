const left = document.getElementById("left");
const middle = document.getElementById("middle");
const right = document.getElementById("right");
const bottom = document.getElementById("bottom");

exps = [
  "The worlds fastest fidget spinner",
  "Slime green, low friction ball bearings, with dual finger grips",
  "I have one. It's pretty good.",
];

// function showDetail(v, exps) {
//   v.innerText = "";
//   v.innerText = `${exps}`;
// }
// left.addEventListener("click", showDetail(bottom, exps[0]));
// middle.addEventListener("click", showDetail(bottom, exps[1]));
// right.addEventListener("click", showDetail(bottom, exps[2]));

left.addEventListener("click", () => {
  bottom.innerText = "";
  bottom.innerText = `${exps[0]}`;
});
middle.addEventListener("click", () => {
  bottom.innerText = "";
  bottom.innerText = `${exps[1]}`;
});
right.addEventListener("click", () => {
  bottom.innerText = "";
  bottom.innerText = `${exps[2]}`;
});
