/* global jest, test, expect */
import bi from '../src/main';

const arr = [2, 5, 12, -5, 17];

// Mutator functions
// Using spread operator to get a fresh copy every time
test('fill', () => {
  expect(bi.fill([...arr], 0)).toEqual(Array(arr.length).fill(0));
  expect(bi.fill([...arr], 0, 1, 4)).toEqual([...arr].fill(0, 1, 4));
});

test('reverse', () => {
  expect(bi.reverse([...arr])).toEqual([...arr].reverse());
  expect(bi.reverse([...arr, 3])).toEqual([...arr, 3].reverse());
});

// Accessor functions
test('concat', () => {
  const arr2 = [3, 4, 12];
  const res = arr.concat(arr2);

  expect(bi.concat(arr, arr2)).toEqual(res);
  expect(bi.concat(arr, arr2)).not.toEqual(res.slice(1, arr.length));
});

test('includes', () => {
  expect(bi.includes(arr, 4)).toBeFalsy();
  expect(bi.includes(arr, 5)).toBeTruthy();
});

// Iteration functions
test('forEach', () => {
  const mock = jest.fn(el => el * 2);

  expect(bi.forEach(arr, mock));
  expect(mock).toHaveBeenCalledTimes(arr.length);
});

test('filter', () => {
  const filterFunc = el => el % 2 === 0;

  expect(bi.filter(arr, filterFunc)).toEqual(arr.filter(filterFunc));
  expect(bi.filter(arr, filterFunc)).not.toEqual(arr.filter(el => el % 2 !== 0));
});

test('map', () => {
  const mapFunc = el => el * 2;

  expect(bi.map(arr, mapFunc)).toEqual(arr.map(mapFunc));
  expect(bi.map(arr, mapFunc)).not.toEqual(arr.map(el => el * 5));
});
