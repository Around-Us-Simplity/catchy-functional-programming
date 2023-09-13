import * as fs from "fs";
import * as path from "path";
import { getShareArray } from "./day3-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day3-2022.txt");

  const input = fs.readFileSync(inputPath).toString().split("\n");

  const scoreTable = new Map(
    [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((alpha, idx) => [alpha, idx + 1]),
  );

  it("first answer", () => {
    /**
     * How many total Calories is that Elf carrying?
     */
    const firstArray = input.map(el => [el.slice(0, Math.floor(el.length / 2)), el.slice(Math.floor(el.length / 2))]);
    const firstAnswer = firstArray.reduce<number>((acc, [one, two]) => {
      if (!one) return acc;
      let i: number, str: string;
      for (i = 0; i < one.length; i++) {
        str = one[i];
        if (two.includes(str)) {
          return acc + (scoreTable.get(str) || 0);
        }
      }
      return acc;
    }, 0);
    expect(firstAnswer).toBeTruthy();
  });

  it("second answer", () => {
    /**
     * Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
     */
    const reducedArray = input?.reduce<string[][]>(
      (acc, el, idx) => (idx % 3 ? [...acc.slice(0, acc.length - 1), [...acc[acc.length - 1], el]] : [...acc, [el]]),
      [],
    );
    const secondAnswer = reducedArray.reduce((acc, [one, two, three]) => {
      const oneTwo = getShareArray(one, two);
      const twoThree = getShareArray(two, three);
      const getShare = oneTwo.filter(el => twoThree.includes(el))[0];
      return acc + (scoreTable.get(getShare) || 0);
    }, 0);
    expect(secondAnswer).toEqual(203002);
  });
});
