/// My First Code
let solve1 = () => {
  console.log("My first code on workat.tech");
};
solve1();

/// One To Ten
let solve2 = () => {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
};
solve2();

/// Sum up to Ten
let solve3 = () => {
  sum = 0;
  for (let i = 1; i < 11; i++) {
    sum += i;
  }
  console.log(sum);
};
solve3();

/// Cube
let solve4 = (input) => {
  console.log(Math.pow(input, 2) * 6, Math.pow(input, 3));
};
solve4(7);

///Candies
let solve5 = (input, num) => {
  if (input % num == 0) {
    return console.log("YES");
  }
  return console.log("NO");
};
solve5(35, 10);

///milkman
let solve6 = (r, h) => {
  console.log(((Math.pow(r, 2) * 3.14 * h) / 1000) * 40);
};
solve6(5, 24);

