import * as fs from "fs";
import * as path from "path";

type Directory = {
  dir?: string;
  fileName?: string;
  fileSize?: number;
  children?: Directory[];
};

type Dir = Directory[];

const __dirname = path.resolve();

function readFile(): string[] {
  const inputPath = path.join(__dirname, "/practice/week7/", "day7-2022.txt");

  return fs.readFileSync(inputPath).toString().split("\n");
}

function getType(line: string) {
  if (line.startsWith("$")) return "command";
  if (line.startsWith("dir")) return "directory";
  return "file";
}

function getDirectorySizes(lines: string[]) {
  const dirs = new Map();
  let currentDirectory = ["/"];

  for (let line of lines) {
    if (getType(line) === "command") {
      let [, command, arg] = line.split(" ");

      if (command === "cd") {
        if (arg === "/") {
          currentDirectory.splice(1);
        } else if (arg === "..") {
          currentDirectory.pop();
        } else {
          currentDirectory.push(arg);
        }
      }
    }

    if (getType(line) === "file") {
      const [size] = line.split(" ");
      const key = currentDirectory.join("/");

      dirs.set(key, (dirs.get(key) || 0) + Number(size));

      if (currentDirectory.length > 1) {
        for (let i = currentDirectory.length - 1; i > 0; i--) {
          const parentKey = currentDirectory.slice(0, i).join("/");

          dirs.set(parentKey, (dirs.get(parentKey) || 0) + Number(size));
        }
      }
    }
  }

  return dirs;
}

function getSumOfTotalSizes(dirs: Map<string, number>) {
  const MAX_DIR_SIZE = 100_000;
  let total = 0;

  for (let size of dirs.values()) {
    if (size <= MAX_DIR_SIZE) {
      total += size;
    }
  }

  return total;
}

function part1() {
  return getSumOfTotalSizes(getDirectorySizes(readFile()));
}

console.log(part1());

function getSmallestSize(dirs: Map<string, number>, total: number) {
  const MAX_DIR_SIZE = 70_000_000;
  const AVAILABLE_SIZE = 30_000_000;
  const answer = [];
  const emptySize = MAX_DIR_SIZE - total;

  for (let size of dirs.values()) {
    if (size + emptySize >= AVAILABLE_SIZE && size !== total) {
      answer.push(size);
    }
  }

  return answer.reduce((acc, v) => {
    if (v + emptySize >= AVAILABLE_SIZE && v < acc) {
      return v;
    }
    return acc;
  });
}

function getRootSize(dirs: Map<string, number>) {
  return dirs.get("/") || 0;
}

function part2() {
  const dirs = getDirectorySizes(readFile());
  const total = getRootSize(dirs);
  return getSmallestSize(dirs, total);
}

console.log(part2());
