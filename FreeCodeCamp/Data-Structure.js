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
const myMap = new Map();
myMap.set("freeCodeCamp", "Awesome!");

///Create a Hash Table
var called = 0;
var hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};

  this.add = (key, value) => {
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = value;
  };
  this.remove = (key) => {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0)
      delete this.collection[hashedKey];
  };
  this.lookup = (key, value) => {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  };
};

///Work with Nodes in a Linked List
var Node = function (element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

var Cat = new Node("Cat");
var Dog = new Node("Dog");
Kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;

///Create a Linked List Class
///Remove Elements from a Linked List
///Remove Elements from a Linked List by Index
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };
  this.head = function () {
    return head;
  };
  this.size = function () {
    return length;
  };
  this.add = function (element) {
    const node = new Node(element);
    if (head) {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      head = node;
    }
    length++;
  };

  this.remove = function (element) {
    if (head.element === element) {
      head = head.next;
      return length--;
    }
    let previous = head;
    while (previous) {
      let current = previous.next;
      if (current) {
        if (current.element === element) {
          previous.next = current.next;
          return length--;
        }
      }
      previous = current;
    }
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  this.indexOf = function (el) {
    let currentNode = head,
      index = -1,
      indexFound = false;

    while (!indexFound && currentNode) {
      index++;
      if (currentNode.element === el) {
        indexFound = true;
      }
      currentNode = currentNode.next;
    }
    return indexFound ? index : -1;
  };
  this.elementAt = function (i) {
    let currentNode = head,
      currentElement,
      index = -1,
      indexReached = false;

    while (!indexReached && currentNode) {
      index++;
      currentElement = currentNode.element;
      if (index === i) {
        indexReached = true;
      }
      currentNode = currentNode.next;
    }
    return indexReached ? currentElement : undefined;
  };
  this.removeAt = function (index) {
    if (index < 0 || index >= length) {
      return null;
    }
    let deletedNode = head;
    if (index == 0) {
      head = null;
    } else {
      let currentNode = head;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      deletedNode = currentNode.next;
      currentNode.next = deletedNode.next;
    }
    length--;
    return deletedNode.element;
  };
}

///Add Elements at a Specific Index in a Linked List
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };
  this.head = function () {
    return head;
  };
  this.size = function () {
    return length;
  };
  this.add = function (element) {
    const node = new Node(element);
    if (head) {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      head = node;
    }
    length++;
  };
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  };
}

///Create a Doubly Linked List
var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;

  this.add = function (data) {
    let node = new Node(data, this.tail);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let tempNode = this.tail;
      tempNode.next = node;
      this.tail = node;
    }
  };

  this.remove = function (data) {
    if (this.head === null) return null;
    let tempNode = this.head;
    while (tempNode !== this.tail) {
      if (tempNode.data === data) {
        if (tempNode === this.head) {
          this.head = tempNode.next;
          tempNode.next.prev = null;
        } else {
          let prevNode = tempNode.prev;
          prevNode.next = tempNode.next;
        }
      }
      tempNode = tempNode.next;
    }
    if (tempNode.data === data) {
      this.tail = tempNode.prev;
      tempNode.prev.next = null;
    }
  };
};

///Reverse a Doubly Linked List
var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;

  this.add = function (element) {
    let node = new Node(element, this.tail);
    let currentNode = this.head;
    let previousNode;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.prev = currentNode;
      currentNode.next = node;
      this.tail = node;
    }
  };
  this.reverse = function () {
    let temp = null;
    let currentNode = this.head;

    if (this.head === null) {
      return null;
    }

    this.tail = currentNode;

    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }

    if (temp != null) {
      this.head = temp.prev;
    }
  };
};

////Add a New Element to a Binary Search Tree
///Find the Minimum and Maximum Value in a Binary Search Tree
///Check if an Element is Present in a Binary Search Tree
///Check if Tree is Binary Search Tree
///Find the Minimum and Maximum Height of a Binary Search Tree
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function (value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === newNode.value) {
        return null;
      }
      const direction = currentNode.value > newNode.value ? "left" : "right";
      if (!currentNode[direction]) {
        currentNode[direction] = newNode;
        return undefined;
      }
      currentNode = currentNode[direction];
    }
  };
  this.findMin = function (value) {
    if (!this.root) return null;
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  };
  this.findMax = function (value) {
    if (!this.root) return null;
    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  };
  this.isPresent = function (value) {
    if (!this.root) return false;

    let curr = this.root;
    while (curr && curr.value !== value) {
      if (curr.value > value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return !curr;
  };
  function isBinarySearchTree(tree) {
    function isBinarySubTree(node) {
      return (
        !node ||
        ((!node.left || node.left.value < node.value) &&
          (!node.right || node.right.value >= node.value) &&
          isBinarySubTree(node.left) &&
          isBinarySubTree(node.right))
      );
    }
    return isBinarySubTree(tree.root);
  }
}
