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

///Create a Map Data Structure
var Map = function () {
  this.collection = {};
  this.has = (key) => {
    return this.collection.hasOwnProperty(key);
  };
  this.add = (key, value) => {
    this.collection[key] = value;
  };
  this.remove = (key) => {
    if (this.has(key)) {
      delete this.collection[key];
    }
  };
  this.get = (key) => {
    if (this.has(key)) {
      return this.collection[key];
    } else {
      return undefined;
    }
  };
  this.values = () => {
    return [...Object.values(this.collection)];
  };
  this.size = () => {
    return Object.entries(this.collection).length;
  };
  this.clear = () => {
    return (this.collection = {});
  };
};

///Create an ES6 JavaScript Map
