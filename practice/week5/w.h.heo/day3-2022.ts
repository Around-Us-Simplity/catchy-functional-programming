import * as fs from "fs";
import * as path from "path";

const 알파벳 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function readFile(): string[] {
  const inputPath = path.join(__dirname, "..", "day3-2022.txt");

  return fs.readFileSync(inputPath).toString().split("\n");
}

function 배열_절반_자르기(value: string) {
  return [value.slice(0, value.length / 2), value.slice(value.length / 2, value.length)];
}

function 같은_문자_찾기(a: string, b: string) {
  return b.split("").filter(v => a.indexOf(v) !== -1) || "";
}

function 알파벳_인덱스_찾기(v: string[]) {
  return v.map(val => 알파벳.indexOf(val) + 1);
}

function part1() {
  return readFile()
    .map(v => 배열_절반_자르기(v))
    .reduce((acc, v) => acc + 알파벳_인덱스_찾기(같은_문자_찾기(v[0], v[1]))[0], 0);
}

console.log(part1());

function 배열_3등분하기<T>(acc: T[][], v: T, i: number) {
  return i % 3 ? [...acc.slice(0, acc.length - 1), [...acc[acc.length - 1], v]] : [...acc, [v]];
}

function 같은_문자_찾기3(a: string, b: string, c: string) {
  const first = 같은_문자_찾기(a, b);
  const second = 같은_문자_찾기(b, c);

  const answer = first.find(val => second.find(v => v.indexOf(val) !== -1));

  return answer ? 알파벳.indexOf(answer) + 1 : 0;
}

function part2() {
  return readFile()
    .reduce(배열_3등분하기<string>, [])
    .reduce((acc, v) => {
      const [a, b, c] = v;

      return acc + 같은_문자_찾기3(a, b, c);
    }, 0);
}

console.log(part2());
