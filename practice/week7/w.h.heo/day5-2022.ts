import * as fs from "fs";
import * as path from "path";

const __dirname = path.resolve();
const array = [
  ["L", "N", "W", "T", "D"],
  ["C", "P", "H"],
  ["W", "P", "H", "N", "D", "G", "M", "J"],
  ["C", "W", "S", "N", "T", "Q", "L"],
  ["P", "H", "C", "N"],
  ["T", "H", "N", "D", "M", "W", "Q", "B"],
  ["M", "B", "R", "J", "G", "S", "L"],
  ["Z", "N", "W", "G", "V", "B", "R", "T"],
  ["W", "G", "D", "N", "P", "L"],
];

const testArray = [["Z", "N"], ["M", "C", "D"], ["P"]];

function readFile(): string[] {
  const inputPath = path.join(__dirname, "/practice/week7/", "day5-2022.txt");

  return fs.readFileSync(inputPath).toString().split("\n");
}

function parseInputArray(line: string) {
  return line
    .replace(/\w+\D\s/g, "")
    .split(/\s/)
    .map(Number);
}

function move(array: number[], input: string[][], isReverse: boolean = false) {
  const [count, from, to] = array;

  const popItems = input[from - 1].splice(-count);

  const newArray = isReverse ? popItems.reverse() : popItems;

  input[to - 1].push(...newArray);
}

function part1() {
  const actionArray = readFile().map(line => parseInputArray(line));

  actionArray.forEach(action => {
    move(action, array, true);
  });

  return array.map(val => val.pop()).join("");
}

function part2() {
  const actionArray = readFile().map(line => parseInputArray(line));

  actionArray.forEach(action => {
    move(action, array);
  });

  return array.map(val => val.pop()).join("");
}

// console.log(part1());
console.log(part2());
