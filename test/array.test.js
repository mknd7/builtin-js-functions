/* global jest, describe, test, expect */
import bi from '../src/main';

const arr = [2, 5, 12, -5, 17];

describe('Array functions', () => {
  // Mutator functions
  // Using spread syntax to get a fresh array every time
  test('fill', () => {
    expect(bi.fill([...arr], 0)).toEqual(Array(arr.length).fill(0));
    expect(bi.fill([...arr], 0, 1, 4)).toEqual([...arr].fill(0, 1, 4));
    expect(bi.fill([...arr], 0, 4, 1)).toEqual([...arr].fill(0, 4, 1));

    expect(bi.fill([...arr], 0, -3, -2)).toEqual([...arr].fill(0, -3, -2));
    expect(bi.fill([...arr], 0, -2, -3)).toEqual([...arr].fill(0, -2, -3));
    expect(bi.fill([...arr], 0, -5, -5)).toEqual([...arr].fill(0, -5, -5));
  });

  test('reverse', () => {
    expect(bi.reverse([...arr])).toEqual([...arr].reverse());
    expect(bi.reverse([...arr, 3])).toEqual([...arr, 3].reverse());
  });

  test('copyWithin', () => {
    expect(bi.copyWithin([...arr], 0)).toEqual([...arr].copyWithin(0));
    expect(bi.copyWithin([...arr], 7)).toEqual([...arr].copyWithin(7));

    expect(bi.copyWithin([...arr], 2, 3)).toEqual([...arr].copyWithin(2, 3));
    expect(bi.copyWithin([...arr], 2, 3, 4)).toEqual([...arr].copyWithin(2, 3, 4));
    expect(bi.copyWithin([...arr], 2, 3, 2)).toEqual([...arr].copyWithin(2, 3, 2));

    expect(bi.copyWithin([...arr], 2, -2)).toEqual([...arr].copyWithin(2, -2));
    expect(bi.copyWithin([...arr], 2, -3, -4)).toEqual([...arr].copyWithin(2, -3, -4));
    expect(bi.copyWithin([...arr], 2, -3, -2)).toEqual([...arr].copyWithin(2, -3, -2));
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

  test('slice', () => {
    expect(bi.slice(arr)).toEqual(arr.slice());

    expect(bi.slice(arr, 3)).toEqual(arr.slice(3));
    expect(bi.slice(arr, -2)).toEqual(arr.slice(-2));
    expect(bi.slice(arr, 4, 4)).toEqual(arr.slice(4, 4));

    expect(bi.slice(arr, 0, 4)).toEqual(arr.slice(0, 4));
    expect(bi.slice(arr, -2, -4)).toEqual(arr.slice(-2, -4));
    expect(bi.slice(arr, -4, -2)).toEqual(arr.slice(-4, -2));
    
    expect(bi.slice(arr, arr.length - 1)).toEqual(arr.slice(arr.length - 1));
    expect(bi.slice(arr, arr.length)).toEqual(arr.slice(arr.length));
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
});
