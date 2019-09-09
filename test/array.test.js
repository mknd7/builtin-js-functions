import bia from '../src/functions/array';

test('includes', () => {
  const arr = [2, 5, 12];

  expect(bia.includes(arr, 4)).toBeFalsy();
  expect(bia.includes(arr, 5)).toBeTruthy();
});


test('forEach', () => {
  const arr = [2, 5, 12];

  expect(bia.forEach(arr, (el, id) => {
  }));
});


test('map', () => {
  const arr = [2, 5, 12];

  expect(bia.map(arr, el => el * 2)).toEqual(arr.map(el => el * 2));
  expect(bia.map(arr, el => el * 2)).not.toEqual(arr.map(el => el * 5));
})
