/**
 * https://adventofcode.com/2022/day/1
 */

import * as fs from "fs";
import * as path from "path";

const inputPath = path.join(__dirname, "..", "day1-2022.txt");

const input = fs
  .readFileSync(inputPath)
  .toString()
  .split("\n\n")
  .map(v => v.split("\n"));

const caloriesTotalArray = input.map(v => v.reduce((acc, v) => acc + +v, 0));

const part1Result = Math.max(...caloriesTotalArray);

console.log(part1Result);

const descCaloriesTotal = caloriesTotalArray.sort((a, b) => b - a);

const part2Result = descCaloriesTotal.reduce((acc, v, i) => {
  if (i < 3) {
    acc += +v;
  }

  return acc;
}, 0);

console.log(part2Result);
