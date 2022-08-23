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

/// 1 Character Line
let solve17 = (input) => {
  let word = input.split("");
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
  }
};
solve17("WORKATTECH");

///Reverse Order
let solve18 = (...input) => {
  let array = [...input];
  console.log(array.reverse());
};
solve18(34, 12, 56, 2, 1);

/// 2 Character Line
let solve19 = (input) => {
  let words = input.split("");
  for (let i = 0; i < words.length; i++) {
    let word = words.splice(i, 2).join("");
    i--;
    console.log(word);
  }
};
solve19("WORKATTECH");

///Weather
let solve20 = (...input) => {
  let array = [...input];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] >= 30 && array[i][1] >= 90) {
      console.log("Hot and Humid");
    } else if (array[i][0] >= 30 && array[i][1] < 90) {
      console.log("Hot");
    } else if (array[i][0] < 30 && array[i][1] >= 90) {
      console.log("Cool and Humid");
    } else {
      console.log("Cool");
    }
  }
};
solve20([34, 98], [23, 49]);

///Palindrome
let solve21 = (input) => {
  let reverse = input.split("").reverse().join("");
  if (input == reverse) {
    return console.log("TRUE");
  }
  return console.log("FALSE");
};
solve21("refer");

///Multiplication Table
let solve22 = (input) => {
  for (let i = 1; i < 11; i++) {
    console.log(input * i);
  }
};
solve22(6);

//Vowels
let solve23 = (...input) => {
  let arr = [...input];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].match(/[aiueo]/gi);
    console.log(word.length);
  }
};
solve23("Neha", "Rajan", "Aamir", "Bonnie", "Ram");

//Pastries
let solve24 = (...input) => {
  let arr = [...input];
  let desert = arr[0];
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    desert -= arr[i];
    sum += arr[i];
    if (desert > 0) {
      console.log("Enjoy your dessert!");
    } else {
      console.log("Sorry, we are all out!");
    }
  }
};
solve24(15, 3, 2, 7, 4, 2, 1);

///High Fever
let solve25 = (...input) => {
  let arr = [...input];
  let people = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= 98.6) {
      people.push(arr[i][0]);
    }
  }
  console.log(people);
};
solve25(["Peter", 98.9], ["Ron", 98.5], ["Cynthia", 99.0], ["Sherry", 100]);

///Guess
let solve26 = (...input) => {
  let arr = [...input];
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] === arr[i]) {
      arr.splice(i + 1, arr.length - i);
    }
  }
  let people = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] === arr[i]) {
      people.push("Correct Guess");
    } else {
      people.push("Incorrect Guess");
    }
  }
  console.log(people);
};
solve26(14, 3, 23, 19, 14, 12);

///Square The Number
let solve27 = (...input) => {
  let arr = [...input];
  for (let i = 0; i < arr.length; i++) {
    console.log(Math.pow(arr[i], 2));
  }
};
solve27(3, 25, 13);

///Words in Sentence
let solve28 = (input) => {
  let words = input.split(" ");
  console.log(words.length);
};
solve28("The quick brown fox jumped over the lazy dog.");

///Not Divisible
let solve29 = (input) => {
  let arr = [];
  for (let i = 1; i < input + 1; i++) {
    if (i % 3 === 0) {
      continue;
    }
    arr.push(i);
  }
};
solve29(13);

///Percentage
let solve30 = (...input) => {
  let arr = [...input];
  let full = arr.length * 80;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`${(sum / full) * 100}%`);
};
solve30(77, 76, 68, 72, 79);

///Max in Matrix
let solve31 = (...input) => {
  let arr = [...input].flat();
  arr.sort((a, b) => a - b);
  console.log(arr[arr.length - 1]);
};
solve31([32, 45, 12], [33, 11, 22]);

///Adjacent Zeros
let solve32 = (input) => {
  if (parseInt(input, 2)) {
    let num = input.toString().split("");
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "0" && num[i + 1] === "0") {
        return console.log("Yes");
      } else {
      }
    }
    return console.log("No");
  }
  return console.log("No");
};
solve32(1010101001);

///Digit Sum
let solve33 = (input) => {
  let num = input.toString().split("");
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  console.log(sum);
};
solve33(13246);

///Square Sum
let solve34 = (input) => {
  let num = input.toString().split("");
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Math.pow(Number(num[i]), 2);
  }
  console.log(sum);
};
solve34(13246);

///Armstrong Number
let solve35 = (input) => {
  let num = input.toString().split("");
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  if (Math.pow(sum, 1 / 2)) {
    return console.log("Yes");
  }
  return console.log("No");
};
solve35(153);

///Fibonacci Series
let solve36 = (input) => {
  let arr = [0, 1];
  for (let i = 0; i < input - 2; i++) {
    let first = arr[i];
    let second = arr[i + 1];
    let num = first + second;
    arr.push(num);
  }
  console.log(arr);
};
solve36(8);

///N Factorial
let solve37 = (input) => {
  let num = 1;
  for (let i = 1; i < input + 1; i++) {
    num *= i;
  }
  console.log(num);
};
solve37(8);

/// Narcissistic Number
let solve38 = (input) => {
  let nums = input.toString().split("");
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(Number(nums[i]));
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], arr.length);
  }
  if (sum === input) {
    return console.log("Yes");
  }
  return console.log("No");
};
solve38(153);

///Sum-Product Number
let solve39 = (input) => {
  let nums = input.toString().split("");
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(Number(nums[i]));
  }
  let sum = 0;
  let mul = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    mul *= arr[i];
  }
  if (sum * mul === input) {
    return console.log("Yes");
  }
  return console.log("No");
};
solve39(135);

/// Gross Salary
let solve40 = (...input) => {
  let arr = [...input];
  let base = arr[3];
  let per = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    per += arr[i];
  }
  let sum = base + (base * per) / 100;
  console.log(sum);
};
solve40(12, 8, 2, 12000);

/// Net Salary
let solve41 = (input) => {
  let income = input;
  let result;
  let tax = 0;
  if (input - 1000000 >= 1000000) {
    tax += 200000 * 0.05 + 500000 * 0.2 + income - 1000000 * 0.3;
  } else if (input - 500000 >= 500000) {
    tax += 200000 * 0.05 + 500000 * 0.2;
  } else if (input - 300000 >= 200000) {
    tax += 200000 * 0.05;
  } else if (500000 > input) {
    tax === 0;
  }
  result = income - tax;
  console.log(result);
};
solve41(750000);

///To Upper Case
let solve42 = (input) => {
  console.log(input.toUpperCase());
};
solve42("welcome");

///Toggle Case
let solve43 = (input) => {
  let arr = [];
  let word = input.split("");
  for (let i = 0; i < word.length; i++) {
    word[i] === word[i].toUpperCase()
      ? arr.push(word[i].toLowerCase())
      : arr.push(word[i].toUpperCase());
  }
  console.log(arr.join(""));
};
solve43("wElcomE");

///Swap Adjacent Elements
let solve44 = (input) => {
  let arr = [];
  for (let i = 0; i < input.length; i = i + 2) {
    arr.push(input[i + 1]);
    arr.push(input[i]);
  }
  console.log(arr);
};
solve44([1, 2, 3, 4, 5, 6, 7, 8]);

///Reverse Array
let solve45 = (input) => {
  console.log(input.reverse());
};
solve45([1, 5, 12, 6, -2]);

///Is Sorted?
let solve46 = (len, input) => {
  if (input.length === len) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > input[i + 1]) {
        return console.log("No");
      }
      return console.log("Yes");
    }
  }
};
solve46(4, [12, 14, 35, 55]);
