const BI_Array = (function() {

  /**
   * @param index - Index value
   * 1. If index is negative, add with array length; if still negative, make it zero
   * 2. If index is greater than array length, make it equal to array lengh
   */
  function normalizeIndex(arrLength, index) {
    if(index < 0) {
      index = arrLength + index;
      if(index < 0) { index = 0; }
    } else if(index > arrLength) {
      index = arrLength;
    }
    return index;
  }

  // Mutator functions
  function fill(arr, value, start = 0, end = arr.length) {
    start = normalizeIndex(arr.length, start);
    end = normalizeIndex(arr.length, end);
    if(end <= start) { return arr; }

    for(let i = start; i < end; i += 1) {
      arr[i] = value;
    }
    return arr;
  }

  function reverse(arr) {
    let temp;
    const halfLength = Math.floor(arr.length / 2);

    for(let i = 0; i < halfLength; i += 1) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }

  function copyWithin(arr, targetIndex, start = 0, end = arr.length) {
    if(targetIndex >= arr.length) { return arr; }

    start = normalizeIndex(arr.length, start);
    end = normalizeIndex(arr.length, end);
    if(end <= start) { return arr; }

    const sliced = slice(arr, start, end);
    for(let i = targetIndex, j = 0;
      i < arr.length, j < sliced.length;
      i += 1,j += 1) {
      arr[i] = sliced[j];
    }
    return arr;
  }

  // Accessor functions
  function concat(arr1, arr2) {
    return [...arr1, ...arr2];
  }

  function includes(arr, el) {
    return arr.indexOf(el) != -1;
  }

  function slice(arr, start = 0, end = arr.length) {
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
  }

  // Iteration functions
  function forEach(arr, func) {
    for(let i = 0; i < arr.length; i += 1) {
      func(arr[i], i);
    }
  }

  function filter(arr, test) {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i += 1) {
      if(test(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }

  function map(arr, func) {
    let mappedArr = [];
    for(let i = 0; i < arr.length; i += 1) {
      mappedArr.push(func(arr[i], i));
    }
    return mappedArr;
  }

  return {
    // Mutator
    fill,
    reverse,
    copyWithin,

    // Accessor
    concat,
    includes,
    slice,

    // Iterator
    forEach,
    filter,
    map
  };
})();

export default BI_Array;
