import midIndexOf, { IOptions } from '..';

describe('midFindIndex test', () => {
  test('midIndexOf([1, 2, 3, 4, 5], 5) ==> 4', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 5;
    expect(midIndexOf(arr, target)).toBe(arr.indexOf(target));
  });

  test('midIndexOf([1, 2, 3, 4, 5], 8) ==> -1', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 8;
    expect(midIndexOf(arr, target)).toBe(arr.indexOf(target));
  });

  test('equalFn test', () => {
    expect(
      midIndexOf([NaN, NaN, NaN], NaN, {
        startIdx: 1,
        equalFn(a: any, b: number) {
          return Object.is(a, b);
        },
      })
    ).toBe(1);
  });

  // about internal implementation
  test('snake search test', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];
    const target = 6;
    const startIdx = 2;

    const path: number[] = [];
    midIndexOf(arr, target, {
      startIdx,
      equalFn(a, b) {
        path.push(a);
        return a === b;
      },
    });
    expect(path).toEqual([2, 3, 1, 4, 0, 5, 6]);
  });
});
