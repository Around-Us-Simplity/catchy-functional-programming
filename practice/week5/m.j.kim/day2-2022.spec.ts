import * as fs from "fs";
import * as path from "path";
import { ScoreCalculator, SecondScoreCalculator, dayTwoReducer } from "./day2-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day2-2022.txt");

  const input = fs.readFileSync(inputPath).toString().split("\n");

  it("first answer", () => {
    /**
     * What would your total score be if everything goes exactly according to your strategy guide?
     */
    const firstAnswer = input.reduce(dayTwoReducer(ScoreCalculator), 0);
    expect(firstAnswer).toBeTruthy();
  });

  it("second answer", () => {
    /**
     * what would your total score be if everything goes exactly according to your strategy guide?
     */
    const secondAnswer = input?.reduce(dayTwoReducer(SecondScoreCalculator), 0);
    expect(secondAnswer).toBeTruthy();
  });
});
