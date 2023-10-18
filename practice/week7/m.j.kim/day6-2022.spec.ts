import * as fs from "fs";
import * as path from "path";
import { getAnswer } from "./day6-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day6-2022.txt");

  const input = fs.readFileSync(inputPath).toString();

  it("first answer", () => {
    /**
     *
     */
    expect(getAnswer(input, 4)).toBeTruthy();
  });

  it("second answer", () => {
    /**
     *
     */
    expect(getAnswer(input, 14)).toBeTruthy();
  });
});
