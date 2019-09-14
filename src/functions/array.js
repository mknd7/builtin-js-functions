const array = {
  includes: (arr, el) => {
    return arr.indexOf(el) != -1;
  },

  forEach: (arr, func) => {
    for(let i = 0; i < arr.length; i += 1) {
      func(arr[i], i);
    }
  },

  map: (arr, func) => {
    let mappedArr = [];
    for(let i = 0; i < arr.length; i += 1) {
      mappedArr.push(func(arr[i], i));
    }
    return mappedArr;
  },

  filter: (arr, test) => {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i += 1) {
      if(test(arr[i])) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
};

export default array;
