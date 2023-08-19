/**
 * 카배열의 push, pop, shift, unshift, splice 메서드를 카피-온-라이트로 구현하기
 * @param array
 * @returns
 */

export const push = <T>(array: T[], ...args: T[]) => {
  return [...array, ...args];
};

export const pop = <T>(array: T[]) => {
  return {
    array: array.slice(0, array.length - 1),
    pop: array[array.length - 1],
  };
};

export const shift = <T>(array: T[]) => {
  return {
    array: array.slice(1, array.length),
    shift: array[0],
  };
};

export const unshift = <T>(array: T[], ...args: T[]) => {
  const unshiftArray = [...args, ...array];
  return {
    array: unshiftArray,
    length: unshiftArray.length,
  };
};

export const splice = <T>(array: T[], startNum: number, endNum?: number, ...args: T[]) => {
  if (!args.length) {
    return endNum
      ? [...array.slice(0, startNum), ...array.slice(startNum + (endNum > 0 ? endNum : 0))]
      : array.slice(0, startNum);
  }

  return [
    ...array.slice(0, startNum),
    ...[...args],
    ...array.slice(startNum, endNum && endNum > 0 ? endNum : array.length),
  ];
};
