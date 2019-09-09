const array = {
  includes: (arr, el) => {
    if(!el) { throw Error('No element passed'); }
    return arr.indexOf(el) != -1
  },

  forEach: (arr, func) => {
    for(let i = 0; i < arr.length; i += 1) {
      func(arr[i], i);
    }
  }
};

export default array;
