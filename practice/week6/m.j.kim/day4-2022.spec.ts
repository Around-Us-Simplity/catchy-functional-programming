import * as path from "path";
import { isContain, isOverlap, processFile } from "./day4-2022";

describe("first day", () => {
  const inputPath = path.join(__dirname, "..", "day4-2022.txt");

  it("first answer", async () => {
    const firstAnswer = await processFile(
      inputPath,
      (line: string) => {
        const [[sStart, sEnd], [eStart, eEnd]] = line.split(",").map(st => st.split("-").map(el => parseInt(el)));
        return isContain(sStart, sEnd, eStart, eEnd);
      },
      0,
    );
    expect(firstAnswer).toEqual(567);
  });

  it("second answer", async () => {
    const secondAnswer = await processFile(
      inputPath,
      (line: string) => {
        const [[sStart, sEnd], [eStart, eEnd]] = line.split(",").map(st => st.split("-").map(el => parseInt(el)));
        return isOverlap(sStart, sEnd, eStart, eEnd);
      },
      0,
    );
    expect(secondAnswer).toEqual(907);
  });
});
