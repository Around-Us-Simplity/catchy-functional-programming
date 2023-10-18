import * as fs from "fs";
import * as path from "path";
import { firstReducer, getAnswer, secondReducer, splitReducer, stacksRearranger } from "./day5-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day5-2022.txt");

  const input = fs.readFileSync(inputPath).toString().trim().split("\n");
  const { stacks, moves } = splitReducer(input);
  const rearrangedStacks = stacksRearranger(stacks);

  it("first answer", () => {
    /**
     * After the rearrangement procedure completes, what crate ends up on top of each stack?
     */
    const firstAnswer = firstReducer(moves, rearrangedStacks);
    expect(getAnswer(firstAnswer)).toBeTruthy();
  });

  it("second answer", () => {
    /**
     * moved crates stay in the same order
     */
    const secondAnswer = secondReducer(moves, rearrangedStacks);
    expect(getAnswer(secondAnswer)).toBeTruthy();
  });
});
