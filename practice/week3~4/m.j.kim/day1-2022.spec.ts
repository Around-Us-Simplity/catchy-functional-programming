import * as fs from "fs";
import * as path from "path";
import { firstReducer, secondReducer, totalReducer } from "./day1-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day1-2022.txt");

  const input = fs
    .readFileSync(inputPath)
    .toString()
    .split("\n\n")
    .map(v => v.split("\n"));

  it("first answer", () => {
    /**
     * How many total Calories is that Elf carrying?
     */
    const firstAnswer = input?.reduce(firstReducer, 0);
    console.log(firstAnswer);
    expect(firstAnswer).toEqual(70369);
  });

  it("second answer", () => {
    /**
     * Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
     */
    const secondAnswer = input?.reduce(secondReducer, [0, 0, 0]).reduce(totalReducer, 0);
    console.log(secondAnswer);
    expect(secondAnswer).toEqual(203002);
  });
});
