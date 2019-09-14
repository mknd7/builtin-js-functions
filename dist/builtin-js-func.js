'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var BI_Array = function () {
  /**
   * @param index - Index value
   * 1. If index is negative, add with array length; if not, make it zero
   * 2. If index is greater than array length, make it equal to array lengh
   */
  var normalizeIndex = function normalizeIndex(arrLength, index) {
    if (index < 0) {
      index = arrLength + index;

      if (index < 0) {
        index = 0;
      }
    } else if (index > arrLength) {
      index = arrLength;
    }

    return index;
  };

  return {
    // Mutator functions
    fill: function fill(arr, value) {
      var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
      start = normalizeIndex(arr.length, start);
      end = normalizeIndex(arr.length, end);

      if (end <= start) {
        return arr;
      }

      for (var i = start; i < end; i += 1) {
        arr[i] = value;
      }

      return arr;
    },
    reverse: function reverse(arr) {
      var temp;

      for (var i = 0; i < Math.floor(arr.length / 2); i += 1) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
      }

      return arr;
    },
    // copyWithin: (arr, targetIndex, start, end) => {},
    // Accessor functions
    concat: function concat(arr1, arr2) {
      return [].concat(_toConsumableArray(arr1), _toConsumableArray(arr2));
    },
    includes: function includes(arr, el) {
      return arr.indexOf(el) != -1;
    },
    slice: function slice(arr) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length;

      if (start === end) {
        return [];
      }

      if (start === 0 && end === arr.length) {
        return _toConsumableArray(arr);
      }

      start = normalizeIndex(arr.length, start);
      end = normalizeIndex(arr.length, end);

      if (end <= start) {
        return [];
      }

      var sliced = [];

      for (var i = start; i < end; i += 1) {
        sliced.push(arr[i]);
      }

      return sliced;
    },
    // Iteration functions
    forEach: function forEach(arr, func) {
      for (var i = 0; i < arr.length; i += 1) {
        func(arr[i], i);
      }
    },
    filter: function filter(arr, test) {
      var filteredArr = [];

      for (var i = 0; i < arr.length; i += 1) {
        if (test(arr[i], i)) {
          filteredArr.push(arr[i]);
        }
      }

      return filteredArr;
    },
    map: function map(arr, func) {
      var mappedArr = [];

      for (var i = 0; i < arr.length; i += 1) {
        mappedArr.push(func(arr[i], i));
      }

      return mappedArr;
    }
  };
}();

var BI = _objectSpread2({}, BI_Array);

module.exports = BI;
