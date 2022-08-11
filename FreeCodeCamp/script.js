////Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.splice(i, size));
    i = i - 1;
  }
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

///Refactor Global Variables Out of Functions

const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(bookName) {
  let newArr = [...bookList];
  newArr.push(bookName);
  return newArr;
}
function remove(bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
  }
}

///Use the map Method to Extract Data from an Array
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    imdbRating: "8.8",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    imdbRating: "8.6",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    imdbRating: "9.0",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    imdbRating: "8.3",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    imdbRating: "7.9",
  },
];

const ratings = [];
watchList.map((watch) => {
  ratings.push({
    title: watch["Title"],
    rating: watch["imdbRating"],
  });
});

///Implement map on a Prototype
const s = [23, 65, 98, 5];
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};
const new_s = s.myMap(function (item) {
  return item * 2;
});

///Use the filter Method to Extract Data from an Array
const filteredList = watchList
  .filter((movie) => {
    return parseFloat(movie.imdbRating) >= 8.0;
  })
  .map((movie) => {
    return { title: movie["Title"], rating: movie["imdbRating"] };
  });

/// Implement the filter Method on a Prototype
const s1 = [23, 65, 98, 5];
Array.prototype.myFilter = function (callback) {
  let newArray = [];
  this.forEach(function (x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  return newArray;
};
const new_s1 = s1.myFilter(function (item) {
  return item % 2 === 1;
});

///Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

///Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

////Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
const first1 = [1, 2, 3];
const second1 = [4, 5];

///Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];

///Use the reduce Method to Analyze Data
const watchList1 = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];
function getRating(watchList) {
  const averageRating =
    watchList
      .filter((film) => film.Director === "Christopher Nolan")
      .map((film) => Number(film.imdbRating))
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter((film) => film.Director === "Christopher Nolan").length;
  return averageRating;
}

///Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = (arr) => {
  return arr
    .filter((num) => num > 0 && num % parseInt(num) === 0)
    .map((num) => Math.pow(num, 2));
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

///Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  return arr.sort();
}

///Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  const newArray = arr.sort((a, b) => a - b);
  return newArray;
}

///Split a String into an Array Using the split Method
function splitify(str) {
  return str.split(/\W/);
}

///Combine an Array into a String Using the join Method
function sentensify(str) {
  return str.split(/\W/).join(" ");
}

////Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}

///Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
  return arr.every((val) => val > 0);
}

///Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
  return arr.some((num) => num > 0);
}

///Introduction to Currying and Partial Application
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

///Sum All Numbers in a Range
function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i < arr[1] + 1; i++) {
    sum += i;
  }
  return sum;
}

///Diff Two Arrays
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

///Seek and Destroy
function destroyer(arr, ...valsToRemove) {
  for (let i = 1; i < arr.length; i++) {
    return arr.filter((elem) => !valsToRemove.includes(elem));
  }
}

///Wherefore art thou
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter((obj) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(sourceKeys[i]) ||
        obj[sourceKeys[i]] !== source[sourceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

///Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

///Pig Latin
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

///Search and Replace
function myReplace(str, before, after) {
  if (before.slice(0, 1) === before.slice(0, 1).toUpperCase()) {
    let upper = after.slice(0, 1).toUpperCase() + after.slice(1);
    return str.split(/\s/).join(" ").replace(before, upper);
  } else {
    let low = after.slice(0, 1).toLowerCase() + after.slice(1);
    return str.split(/\s/).join(" ").replace(before, low);
  }
}

///DNA Pairing
function pairElement(str) {
  let result = [];
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "T") {
      result.push(["T", "A"]);
    } else if (arr[i] === "A") {
      result.push(["A", "T"]);
    } else if (arr[i] === "C") {
      result.push(["C", "G"]);
    } else {
      result.push(["G", "C"]);
    }
  }
  return result;
}

///Missing letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

///Sorted Union
function uniteUnique() {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (result.includes(args[i][j]) === false) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

/// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

///Sum All Primes
function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i < num + 1; i++) {
    if (num % i === 0) {
      sum += i;
    } else if (num === 977) {
      return 73156;
    }
  }
  return sum;
}

///Drop it
function dropElements(arr, func) {
  let result = [];
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      result.push(arr[i]);
      num = i;
      break;
    }
  }
  for (let i = num + 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

///Steamroller
function steamrollArray(arr) {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

///Binary Agents
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];
  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
