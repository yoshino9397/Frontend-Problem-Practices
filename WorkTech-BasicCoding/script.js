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

///Average Weight
let solve7 = (...input) => {
  let array = [...input];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};
console.log(
  solve7(40.75, 45.2, 55.3, 49.5, 43.3, 54.1, 38.4, 63.8, 45.2, 58.25)
);

///Odd Even
let solve8 = (...input) => {
  let array = [...input];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("EVEN");
    } else {
      console.log("ODD");
    }
  }
};
solve8(23, 12, 44, 32);

///Print Digits
let solve9 = (...input) => {
  let array = [...input];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].toString().split("").join(" "));
  }
};
solve9(34, 45);

///Divisible By Six
let solve10 = (...input) => {
  let array = [...input];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 6 === 0) {
      console.log("TRUE");
    } else {
      console.log("FALSE");
    }
  }
};
solve10(457, 66, 0, 40);

///Temperature Conversion
let solve11 = (input) => {
  return (9 * input) / 5 + 32;
};
console.log(solve11(12));

///7 Up 7 Down
let solve12 = (...input) => {
  let array = [...input];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 7) {
      console.log("UP");
    } else if (array[i] === 7) {
      console.log("EQUAL");
    } else {
      console.log("DOWN");
    }
  }
};
solve12(12, 7, 4);

///Triangle
let solve13 = (...input) => {
  let array = [...input];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] + array[i][1] > array[i][2]) {
      console.log(array[i][0] + array[i][1] + array[i][2]);
    } else {
      console.log(array[i][0] + array[i][1] - array[i][2]);
    }
  }
};
solve13([3, 4, 5], [1, 2, 4]);

///Number Reversal
let solve14 = (input) => {
  let arr = input.toString().split("").reverse().join("");
  return console.log(Number(arr));
};
solve14(237);

///Add One
let solve15 = (...input) => {
  let info = [...input];
  console.log(
    `Hello ${info[0]}! Next year, you will be ${info[1] + 1} years old`
  );
};
solve15("Ram", 15);

///Happy Birthday
let solve16 = (...input) => {
  let info = [...input];
  let date = new Date();
  let year = date.getFullYear();
  console.log(
    `Happy Birthday ${info[0]}! Your current age is ${year - info[1]}`
  );
};
solve16("Ram", 1996);
