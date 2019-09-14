/* global jest, test, expect */
import bi from '../src/main';

const arr = [2, 5, 12];

test('includes', () => {
  expect(bi.includes(arr, 4)).toBeFalsy();
  expect(bi.includes(arr, 5)).toBeTruthy();
});


test('forEach', () => {
  const mock = jest.fn(el => el * 2);

  expect(bi.forEach(arr, mock));
  expect(mock).toHaveBeenCalledTimes(arr.length);
});


test('map', () => {
  const mapFunc = el => el * 2;

  expect(bi.map(arr, mapFunc)).toEqual(arr.map(mapFunc));
  expect(bi.map(arr, mapFunc)).not.toEqual(arr.map(el => el * 5));
});


test('filter', () => {
  const filterFunc = el => el % 2 === 0;

  expect(bi.filter(arr, filterFunc)).toEqual(arr.filter(filterFunc));
  expect(bi.filter(arr, filterFunc)).not.toEqual(arr.filter(el => el % 2 !== 0));
});
