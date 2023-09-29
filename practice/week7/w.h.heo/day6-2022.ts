import * as fs from "fs";
import * as path from "path";

const __dirname = path.resolve();

function readFile(): string {
  const inputPath = path.join(__dirname, "/practice/week7/", "day6-2022.txt");

  return fs.readFileSync(inputPath).toString();
}

function hasDuplicateText(text: string) {
  const charSet = new Set();

  for (let char of text) {
    if (charSet.has(char)) {
      return true;
    }
    charSet.add(char);
  }

  return false;
}

function findMarker(str: string, first: number) {
  const sliceStr = str.slice(first, first + 4);
  if (hasDuplicateText(sliceStr)) {
    return findMarker(str, first + 1);
  } else {
    return first + 4;
  }
}

function part1() {
  return findMarker(readFile(), 0);
}

function findMarker2(str: string, first: number) {
  const sliceStr = str.slice(first, first + 14);
  if (hasDuplicateText(sliceStr)) {
    return findMarker2(str, first + 1);
  } else {
    return first + 14;
  }
}

function part2() {
  return findMarker2(readFile(), 0);
}

console.log(part2());
