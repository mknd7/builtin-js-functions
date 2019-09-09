import bia from '../src/functions/array';

test('includes', () => {
  const arr = [2, 5, 12];

  expect(bia.includes(arr, 4)).toBeFalsy();
  expect(bia.includes(arr, 5)).toBeTruthy();
  expect(() => {
    bia.includes(arr);
  }).toThrow('No element passed');
});


test('forEach', () => {
  const arr = [2, 5, 12];

  expect(bia.forEach(arr, (el, index) => {
    console.log(el, index);
  }));
});
