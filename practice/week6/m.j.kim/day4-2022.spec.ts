import * as path from "path";
import * as fs from "fs";
import { firstReducer, secondReducer } from "./day4-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day4-2022.txt");
  const input = fs.readFileSync(inputPath).toString().split("\n");

  it("first answer", async () => {
    const firstAnswer = input.reduce(firstReducer, 0);
    expect(firstAnswer).toEqual(567);
  });

  it("second answer", async () => {
    const secondAnswer = input.reduce(secondReducer, 0);
    expect(secondAnswer).toEqual(907);
  });
});
