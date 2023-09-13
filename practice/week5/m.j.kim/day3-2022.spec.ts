import * as fs from "fs";
import * as path from "path";
import { threeStringElement, firstReducer, secondReducer } from "./day3-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day3-2022.txt");

  const input = fs.readFileSync(inputPath).toString().split("\n");

  it("first answer", () => {
    /**
     * What is the sum of the priorities of those item types?
     */
    const firstAnswer = input.reduce(firstReducer, 0);
    expect(firstAnswer).toBeTruthy();
  });

  it("second answer", () => {
    /**
     * What is the sum of the priorities of those item types?
     */
    const secondAnswer = input?.reduce(threeStringElement, []).reduce(secondReducer, 0);
    expect(secondAnswer).toBeTruthy();
  });
});
