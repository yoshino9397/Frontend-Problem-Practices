///Find the Symmetric Difference
function sym(args) {
  var args = [...arguments];
  function symDiff(arrayOne, arrayTwo) {
    var result = [];
    arrayOne.forEach((item) => {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });
    arrayTwo.forEach((item) => {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });
    return result;
  }
  return args.reduce(symDiff);
}
console.log(sym([1, 2, 3], [5, 2, 1, 4]));

///Inventory Update
function updateInventory(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i][1] === arr1[j][1]) {
        let sum = arr2[i][0] + arr1[j][0];
        result.push([sum, arr1[j][1]]);
      }
    }
  }
  arr1.forEach((item) => {
    if (arr2.flat().indexOf(item[1]) < 0 && result.indexOf(item[1]) < 0) {
      result.push(item);
    }
  });
  arr2.forEach((item) => {
    if (arr1.flat().indexOf(item[1]) < 0 && result.indexOf(item[1]) < 0) {
      result.push(item);
    }
  });
  return result.sort((a, b) => (a[1] > b[1] ? 1 : -1));
}

///No Repeats Please
function permAlone(str) {
  let regex = /(.)\1+/;
  const arr = str.split("");
  const permutations = [];
  let tmp;

  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  function generate(int) {
    if (int === 1) {
      permutations.push(arr.join(""));
    } else {
      for (let i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }
  generate(arr.length);

  const filtered = permutations.filter(function (string) {
    return !string.match(regex);
  });
  return filtered.length;
}
permAlone("aab");

///Pairwise
function pairwise(arr, arg) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        arr[i] + arr[j] == arg &&
        !result.includes(i) &&
        !result.includes(j)
      ) {
        result.push(i, j);
        break;
      }
    }
  }
  return result.reduce((sum, curr) => sum + curr, 0);
}

///Implement Bubble Sort
function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
}

///Implement Selection Sort
function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    swap(i, min, array);
  }
  return array;
}

///Implement Insertion Sort
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}

///Implement Quick Sort
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}

///Implement Merge Sort
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    return [...merged, ...array1, ...array2];
  }
}
///Implement Binary Search
function binarySearch(searchList, value) {
  const arrayPath = [];
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  while (searchList[middle] !== value) {
    arrayPath.push(searchList[middle]);
    if (right < left) {
      return "Value Not Found";
    }
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }
  }
  arrayPath.push(searchList[middle]);
  return arrayPath;
}

///Typed Arrays
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);

///Learn how a Stack Works
var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];
homeworkStack.pop();
homeworkStack.push("CS50");

///Create a Stack Class
function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.push = function (val) {
    return collection.push(val);
  };
  this.pop = function () {
    return collection.pop();
  };
  this.peek = function () {
    return collection[collection.length - 1];
  };
  this.isEmpty = function () {
    if (collection.length === 0) {
      return true;
    }
    return false;
  };
  this.clear = function () {
    return (collection.length = 0);
  };
}

///Create a Queue Class
function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (val) {
    return collection.push(val);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return (collection.length = 0);
  };
}

///Create a Priority Queue Class
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  this.enqueue = function (item) {
    let index = this.collection.findIndex((elem) => elem[1] > item[1]);
    if (index !== -1) {
      this.collection.splice(index, 0, item);
    } else {
      this.collection.push(item);
    }
  };
  this.dequeue = function () {
    return this.collection.shift()[0];
  };
  this.size = function () {
    return this.collection.length;
  };
  this.isEmpty = function () {
    return this.size() === 0;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.front = function () {
    return this.collection[0][0];
  };
}

///Create a Circular Queue
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }
  print() {
    return this.queue;
  }
  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;
      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
  }
  dequeue() {
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
  }
}
///Create a Set Class
///Perform a Union on Two Sets
///Perform an Intersection on Two Sets of Data
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  values() {
    return Object.keys(this.dictionary);
  }
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }
    return false;
  }
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }
  size() {
    return this.length;
  }
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });
    return newSet;
  }
  intersection(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      if (set.values().includes(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }
}

///Perform a Difference on Two Sets of Data
// class Set {
//   constructor() {
//     this.dictionary = {};
//     this.length = 0;
//   }
//   has(element) {
//     return this.dictionary[element] !== undefined;
//   }
//   values() {
//     return Object.keys(this.dictionary);
//   }
//   add(element) {
//     if (!this.has(element)) {
//       this.dictionary[element] = true;
//       this.length++;
//       return true;
//     }
//     return false;
//   }
//   remove(element) {
//     if (this.has(element)) {
//       delete this.dictionary[element];
//       this.length--;
//       return true;
//     }
//     return false;
//   }
//   size() {
//     return this.length;
//   }
//   union(set) {
//     const newSet = new Set();
//     this.values().forEach((value) => {
//       newSet.add(value);
//     });
//     set.values().forEach((value) => {
//       newSet.add(value);
//     });
//     return newSet;
//   }
//   intersection(set) {
//     const newSet = new Set();
//     let largeSet;
//     let smallSet;

//     if (this.dictionary.length > set.length) {
//       largeSet = this;
//       smallSet = set;
//     } else {
//       largeSet = set;
//       smallSet = this;
//     }
//     smallSet.values().forEach((value) => {
//       if (largeSet.dictionary[value]) {
//         newSet.add(value);
//       }
//     });
//     return newSet;
//   }
//   difference(set) {
//     const newSet = new Set();
//     this.values().forEach((value) => {
//       if (!set.values().includes(value)) {
//         newSet.add(value);
//       }
//     });
//     return newSet;
//   }
// }

///Perform a Subset Check on Two Sets of Data
// class Set {
//   constructor() {
//     this.dictionary = {};
//     this.length = 0;
//   }
//   has(element) {
//     return this.dictionary[element] !== undefined;
//   }
//   values() {
//     return Object.keys(this.dictionary);
//   }
//   add(element) {
//     if (!this.has(element)) {
//       this.dictionary[element] = true;
//       this.length++;
//       return true;
//     }
//     return false;
//   }
//   remove(element) {
//     if (this.has(element)) {
//       delete this.dictionary[element];
//       this.length--;
//       return true;
//     }
//     return false;
//   }
//   size() {
//     return this.length;
//   }
//   union(set) {
//     const newSet = new Set();
//     this.values().forEach((value) => {
//       newSet.add(value);
//     });
//     set.values().forEach((value) => {
//       newSet.add(value);
//     });
//     return newSet;
//   }
//   intersection(set) {
//     const newSet = new Set();
//     let largeSet;
//     let smallSet;

//     if (this.dictionary.length > set.length) {
//       largeSet = this;
//       smallSet = set;
//     } else {
//       largeSet = set;
//       smallSet = this;
//     }
//     smallSet.values().forEach((value) => {
//       if (largeSet.dictionary[value]) {
//         newSet.add(value);
//       }
//     });
//     return newSet;
//   }
//   difference(set) {
//     const newSet = new Set();
//     this.values().forEach((value) => {
//       if (!set.dictionary[value]) {
//         newSet.add(value);
//       }
//     });
//     return newSet;
//   }
//   isSubsetOf(set) {
//     return this.values().every((value) => set.values().includes(value));
//   }
// }

///Create and Add to Sets in ES6
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  set.add("Taco");
  set.add("Cat");
  set.add("Awesome");
  // console.log(Array.from(set));
  return set;
}
checkSet();

///Remove items from a set in ES6
function checkSet() {
  var set = new Set([1, 2, 3, 4, 5]);
  set.delete(2);
  set.delete(5);
  return set;
}

///Use .has and .size on an ES6 Set
function checkSet(arrToBeSet, checkValue) {
  const newSet = new Set(arrToBeSet);
  return [newSet.has(checkValue), newSet.size];
}

///Use Spread and Notes for ES5 Set() Integration
function checkSet(set) {
  var setToArr = [...set];
  return setToArr;
}
