/**
 * 카배열의 push, pop, shift, unshift, splice 메서드를 카피-온-라이트로 구현하기
 * @param array
 * @returns
 */

export const push = <T>(array: T[], ...items: T[]) => [...array, ...items];

export const pop = <T>(array: T[]) => array.slice(0, -1);

export const shift = <T>(array: T[]) => array.slice(1);

export const unshift = <T>(array: T[], ...items: T[]) => [...items, ...array];

export const splice = <T>(array: T[], start: number, deleteCount = Number.MAX_SAFE_INTEGER, ...items: T[]) => {
  const calculatedStart = start > 0 ? Math.min(start, array.length) : start < 0 ? Math.max(0, array.length + start) : 0;
  const calculatedDelcnt = deleteCount > 0 ? Math.trunc(deleteCount) : 0;
  return [...array.slice(0, calculatedStart), ...items, ...array.slice(calculatedStart + calculatedDelcnt)];
};

export const pipe =
  <T>(...fns: ((args: T) => T)[]) =>
  (initial: T) =>
    fns.reduce((acc: T, fn) => fn(acc), initial);
