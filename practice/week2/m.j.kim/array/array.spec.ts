import { push, pop, shift, unshift, splice, pipe } from "./array";

describe("array method to pure function", () => {
  const arr = [1, 2, 3];
  afterAll(() => {
    expect(arr).toEqual([1, 2, 3]);
  });

  it("describe here to explain your push methods", () => {
    expect(push(arr, 4)).toEqual([1, 2, 3, 4]);
    expect(push(arr, 4, 5, 6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("describe here to explain your pop methods", () => {
    expect(pop(arr)).toEqual([1, 2]);

    expect(pipe(pop, pop)(arr)).toEqual([1]);
  });

  it("describe here to explain your shift methods", () => {
    expect(shift(arr)).toEqual([2, 3]);

    expect(pipe(shift, shift)(arr)).toEqual([3]);
  });

  it("describe here to explain your unshift methods", () => {
    expect(unshift(arr, 4, 5)).toEqual([4, 5, 1, 2, 3]);
  });

  it("describe here to explain your splice methods", () => {
    expect(splice(arr, 1)).toEqual([1]);
    expect(splice(arr, 0, 1)).toEqual([2, 3]);
    expect(splice(arr, 3, 0, 4, 5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(splice(arr, 1, 2, 4, 5, 6)).toEqual([1, 4, 5, 6]);
  });

  it("more test code with more sample arrays", () => {
    type ArrayStringORNumber = string[] | number[];
    type SpliceTestItemProps = Readonly<{
      array: ArrayStringORNumber;
      args: [number, number, ...ArrayStringORNumber];
      expected: ArrayStringORNumber;
    }>;
    const arrays: readonly SpliceTestItemProps[] = [
      { array: [1, 2, 3, 4, 5], args: [1, 2], expected: [1, 4, 5] },
      { array: ["a", "b", "c", "d", "e"], args: [2, 2, "x", "y", "z"], expected: ["a", "b", "x", "y", "z", "e"] },
      { array: [10, 20, 30], args: [2, 0, 40, 50], expected: [10, 20, 40, 50, 30] },
      { array: ["apple", "banana", "cherry"], args: [1, 1, "grape"], expected: ["apple", "grape", "cherry"] },
      { array: ["red", "green", "blue"], args: [-2, 1], expected: ["red", "blue"] },
      { array: ["one", "two", "three"], args: [-1, 0, "four"], expected: ["one", "two", "four", "three"] },
      { array: ["one", "two", "three"], args: [-1, 1, "four"], expected: ["one", "two", "four"] },
    ];

    arrays.forEach(({ array, args, expected }) => {
      const [start, deleteCount, ...items] = args;
      expect(splice(array, start, deleteCount, ...items)).toEqual(expected);
    });
  });
});
