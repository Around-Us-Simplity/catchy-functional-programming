import { push, pop, shift, unshift, splice } from "./array";

describe("push", () => {
  it("describe here to explain your push methods", () => {
    const result = push([1, true, "a"], "b", 3);
    expect(result).toEqual([1, true, "a", "b", 3]);
  });
});

describe("pop", () => {
  it("describe here to explain your pop methods", () => {
    const result = pop([1, 2, 3]);
    expect(result).toEqual({
      array: [1, 2],
      pop: 3,
    });
  });
});

describe("shift", () => {
  it("describe here to explain your shift methods", () => {
    const result = shift([1, true, "a", { b: "5" }]);
    expect(result).toEqual({
      array: [true, "a", { b: "5" }],
      shift: 1,
    });
  });
});

describe("unshift", () => {
  it("describe here to explain your unshift methods", () => {
    const result = unshift([1, 2, 3, "5"], 4, "1");
    expect(result).toEqual({
      array: [4, "1", 1, 2, 3, "5"],
      length: 6,
    });
  });
});

describe("splice", () => {
  it("describe here to explain your splice methods", () => {
    const result1 = splice([1, 2, "a", "b", "c"], 3);
    expect(result1).toEqual([1, 2, "a"]);

    const result2 = splice(["Jan", "March", "April", "June"], 1, 0, "Feb");
    expect(result2).toEqual(["Jan", "Feb", "March", "April", "June"]);

    const result3 = splice(["Jan", "Feb", "March", "April", "June"], 4, 1, "May");
    expect(result3).toEqual(["Jan", "Feb", "March", "April", "May"]);
  });
});
