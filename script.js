const arr = [1, 2, 3, 4, 5];

function firstIndex(arr) {
  for (let i = 1; i < arr[1]; i++) {
    console.log(i);
  }
}

firstIndex(arr);

function lastIndexOf(array, value) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf(arr, 5));

function find(arr, val) {
  for (let i in arr) {
    if (val == arr[i]) {
      return i;
    }
  }

  return false;
}

console.log(find(arr, 3));

function findIndex(arr, val) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(findIndex(arr, 3));

function includes(array, arrayValue) {
  for (let value of array) {
    if (value == arrayValue) {
      return true;
    }
  }
  return false;
}
console.log(includes(arr, 2));

function everyArray(array) {
  let newArr = [];
  for (let key in array) {
    if (typeof array[key] != "undefined") {
      newArr.push(key);
    }
  }
  return newArr;
}

console.log(everyArray(arr));

const THRESHOLD = 12;
const v = [5, 2, 16, 4, 3, 18, 20];
let res;

res = v.every(function (element, index, array) {
  console.log("element:", element);
  if (element >= THRESHOLD) {
    return false;
  }

  return true;
});
console.log("res:", res);

res = v.some(function (element, index, array) {
  console.log("element:", element);
  if (element >= THRESHOLD) {
    return true;
  }

  return false;
});
console.log("res:", res);

const a = [1, 3, 5, 6, 7, 9];
let firstEven;
let i = 0;
a.some(function (x) {
  i++;
  if (!(x % 2)) {
    firstEven = x;
    return true;
  }
});
console.log([firstEven, i]);

// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex,
// includes, every и some, которые работают так же, как одноименные
// методы массивов.

// Алгоритм выполнения:

// 1 Читаете документацию по методу над которым работаете
// 2 разбираетесь как он работает и что возвращает
// 3 пишете функцию которая полностью имитирует работу метода
