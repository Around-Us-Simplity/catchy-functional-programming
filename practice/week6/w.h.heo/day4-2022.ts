import * as fs from "fs";
import * as path from "path";

export function readFile(): string[] {
  const inputPath = path.join(__dirname, "..", "day4-2022.txt");

  return fs.readFileSync(inputPath).toString().split("\n");
}

function splitInput(array: string[]) {
  return array.map(value => value.split(/[-,]/));
}

function checkContains(acc: number, array: string[]) {
  const [a, b, x, y] = array;

  if (+a >= +x && +b <= +y) {
    acc++;
  } else if (+a <= +x && +b >= +y) {
    acc++;
  }

  return acc;
}

export function part1(input: string[]) {
  return splitInput(input).reduce((acc, numberArr) => checkContains(acc, numberArr), 0);
}

function checkOverlap(acc: number, array: string[]) {
  const [a, b, x, y] = array;

  if (+b >= +x && +y >= +a) {
    acc++;
  }

  return acc;
}

export function part2(input: string[]) {
  return splitInput(input).reduce((acc, v) => checkOverlap(acc, v), 0);
}
