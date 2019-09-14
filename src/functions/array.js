const BI_Array = (function() {

  /**
   * @param index - Index value
   * 1. If index is negative, add with array length; if not, make it zero
   * 2. If index is greater than array length, make it equal to array lengh
   */
  const normalizeIndex = (arrLength, index) => {
    if(index < 0) {
      index = arrLength + index;
      if(index < 0) { index = 0; }
    } else if(index > arrLength) {
      index = arrLength;
    }
    return index;
  };

  return {
    // Mutator functions
    fill: (arr, value, start = 0, end = arr.length) => {
      start = normalizeIndex(arr.length, start);
      end = normalizeIndex(arr.length, end);
      if(end <= start) { return arr; }

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

    // copyWithin: (arr, targetIndex, start, end) => {},

    // Accessor functions
    concat: (arr1, arr2) => {
      return [...arr1, ...arr2];
    },

    includes: (arr, el) => {
      return arr.indexOf(el) != -1;
    },

    slice: (arr, start = 0, end = arr.length) => {
      if(start === end) { return []; }
      if(start === 0 && end === arr.length) { return [...arr]; }

      start = normalizeIndex(arr.length, start);
      end = normalizeIndex(arr.length, end);
      if(end <= start) { return []; }

      let sliced = [];
      for(let i = start; i < end; i += 1) {
        sliced.push(arr[i]);
      }
      return sliced;
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
})();

export default BI_Array;
