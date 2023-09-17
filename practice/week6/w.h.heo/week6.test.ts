import { part1, part2, readFile } from "./day4-2022";
import Queue from "./queue";

describe("day4-2022", () => {
  it("part1", () => {
    const input = readFile();

    expect(part1(input)).toEqual(567);
  });

  it("part2", () => {
    const input = readFile();

    expect(part2(input)).toEqual(907);
  });

  it("Queue", () => {
    const queue = new Queue(5);

    const works = [() => console.log("first"), () => console.log("second"), () => console.log("third")];

    works.forEach(work => queue.add(work));

    queue.run();
  });
});
