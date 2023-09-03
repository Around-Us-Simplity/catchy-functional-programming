/**
 * https://adventofcode.com/2022/day/1
 */

import * as fs from "fs";
import * as path from "path";

function readFile(): string[][] {
  const inputPath = path.join(__dirname, "..", "day1-2022.txt");

  return fs
    .readFileSync(inputPath)
    .toString()
    .split("\n\n")
    .map(v => v.split("\n"));
}

function sum(a: number, b: number) {
  return a + b;
}

function arraySum<T>(array: T[]) {
  return array.reduce((acc, v) => sum(acc, +v), 0);
}

function part1() {
  return readFile().reduce((acc, val) => {
    const total = arraySum<string>(val);
    if (acc < total) {
      return total;
    }

    return acc;
  }, 0);
}

console.log(part1());

function part2(count: number) {
  const descArray = readFile()
    .map(v => v.reduce((acc, v) => sum(acc, +v), 0))
    .sort((a, b) => b - a);
  return arraySum<number>(descArray.slice(0, count));
}

console.log(part2(3));
