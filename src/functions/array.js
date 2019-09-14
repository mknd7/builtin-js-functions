const array = {
  // Mutator functions
  fill: (arr, value, start = 0, end = arr.length) => {
    for(let i = start; i < end; i += 1) {
      arr[i] = value;
    }
    return arr;
  },

  reverse: (arr) => {
    let temp;
    for(let i = 0; i < Math.floor(arr.length / 2); i += 1) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  },

  // Accessor functions
  concat: (arr1, arr2) => {
    return [...arr1, ...arr2];
  },

  includes: (arr, el) => {
    return arr.indexOf(el) != -1;
  },

  // Iteration functions
  forEach: (arr, func) => {
    for(let i = 0; i < arr.length; i += 1) {
      func(arr[i], i);
    }
  },

  filter: (arr, test) => {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i += 1) {
      if(test(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  },

  map: (arr, func) => {
    let mappedArr = [];
    for(let i = 0; i < arr.length; i += 1) {
      mappedArr.push(func(arr[i], i));
    }
    return mappedArr;
  }
};

export default array;
