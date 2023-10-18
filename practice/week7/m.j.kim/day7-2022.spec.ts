import * as fs from "fs";
import * as path from "path";
import { getNodeByInput, sumall, getSmallEnough } from "./day7-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day7-2022.txt");

  const input = fs.readFileSync(inputPath).toString().trim().split("\n");
  const node = getNodeByInput(input);

  console.log(node);

  it("first answer", () => {
    /**
     * Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?
     */
    expect(sumall(node, 100_000)).toBeTruthy();
  });

  it("second answer", () => {
    /**
     * Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?
     */
    expect(getSmallEnough(node)).toBeTruthy();
  });
});
