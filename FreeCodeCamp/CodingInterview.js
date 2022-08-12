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
    // Only change code below this line
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    // Only change code above this line
  }
}
