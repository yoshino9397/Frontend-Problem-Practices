///Find the Symmetric Difference
function sym(args) {
  var args = [...arguments];
  console.log(args);
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

