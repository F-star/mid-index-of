export type IOptions<T> = {
  startIdx?: number;
  equalFn?: (item: any, target: T) => boolean;
};

/**
 *
 * @param list obj with length property, like array
 * @param target searched element
 * @param startIdx start index
 * @returns index (return -1 if not found)
 */
function midIndexOf<T extends unknown[], K extends T[number]>(list: T, target: K, { startIdx, equalFn }: IOptions<K> = {}): number {
  const n = list.length;
  if (startIdx === undefined) {
    startIdx = Math.floor(n / 2);
  }
  if (startIdx < 0) {
    startIdx = 0;
  } else if (startIdx >= n) {
    startIdx = n - 1;
  }

  if (!equalFn) {
    equalFn = function (a, b) {
      return a === b;
    };
  }

  let i = startIdx;
  let j = startIdx + 1;
  while (i >= 0 || j < n) {
    if (i >= 0 && equalFn(list[i], target)) return i;
    if (j < n && equalFn(list[j], target)) return j;
    i--;
    j++;
  }
  return -1;
}

export default midIndexOf;
