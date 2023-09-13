import * as fs from "fs";
import * as path from "path";
import { ScoreCalculator, SecondScoreCalculator } from "./day2-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day2-2022.txt");

  const input = fs.readFileSync(inputPath).toString().split("\n");

  type destructuredArray = ["A" | "B" | "C", "X" | "Y", "Z"];

  it("first answer", () => {
    /**
     * How many total Calories is that Elf carrying?
     */
    const firstAnswer = input.reduce((acc, score) => {
      if (!score) return acc;
      const [enemy, me] = score.split(" ") as destructuredArray;
      return acc + ScoreCalculator[enemy][me];
    }, 0);
    expect(firstAnswer).toBeTruthy();
  });

  it("second answer", () => {
    /**
     * Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
     */
    const secondAnswer = input?.reduce((acc, score) => {
      if (!score) return acc;
      const [enemy, me] = score.split(" ") as destructuredArray;
      return acc + SecondScoreCalculator[enemy][me];
    }, 0);
    console.log(secondAnswer);
    expect(secondAnswer).toBeTruthy();
  });
});
