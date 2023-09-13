// A X 바위
// B Y 종이
// C Z 가위

import * as fs from "fs";
import * as path from "path";

type 상대방_타입 = "A" | "B" | "C";
type 나_타입 = "X" | "Y" | "Z";

const 점수 = {
  X: 1,
  Y: 2,
  Z: 3,
};

const 결과_파트2 = {
  X: 0,
  Y: 3,
  Z: 6,
};

function readFile(): string[][] {
  const inputPath = path.join(__dirname, "..", "day2-2022.txt");

  return fs
    .readFileSync(inputPath)
    .toString()
    .split("\n")
    .map(v => v.split(" "));
}

function 승리_여부_판별(상대방: 상대방_타입, 나: 나_타입) {
  if (상대방 === "A") {
    if (나 === "X") {
      return 점수[나] + 3;
    } else if (나 === "Y") {
      return 점수[나] + 6;
    } else {
      return 점수[나];
    }
  } else if (상대방 === "B") {
    if (나 === "X") {
      return 점수[나];
    } else if (나 === "Y") {
      return 점수[나] + 3;
    } else {
      return 점수[나] + 6;
    }
  } else {
    if (나 === "X") {
      return 점수[나] + 6;
    } else if (나 === "Y") {
      return 점수[나];
    } else {
      return 점수[나] + 3;
    }
  }
}

function sum(a: number, b: number) {
  return a + b;
}

function arraySum<T>(array: T[]) {
  return array.reduce((acc, v) => sum(acc, +v), 0);
}

function part1() {
  const result = readFile().map(v => {
    const [상대방, 나] = v;

    return 승리_여부_판별(상대방 as 상대방_타입, 나 as 나_타입);
  });

  return arraySum(result);
}

console.log(part1());

function 뭘_내지_판별(상대방: 상대방_타입, 나: 나_타입) {
  if (상대방 === "A") {
    if (나 === "X") {
      return 점수["Z"] + 결과_파트2[나];
    } else if (나 === "Y") {
      return 점수["X"] + 결과_파트2[나];
    } else {
      return 점수["Y"] + 결과_파트2[나];
    }
  } else if (상대방 === "B") {
    if (나 === "X") {
      return 점수["X"] + 결과_파트2[나];
    } else if (나 === "Y") {
      return 점수["Y"] + 결과_파트2[나];
    } else {
      return 점수["Z"] + 결과_파트2[나];
    }
  } else {
    if (나 === "X") {
      return 점수["Y"] + 결과_파트2[나];
    } else if (나 === "Y") {
      return 점수["Z"] + 결과_파트2[나];
    } else {
      return 점수["X"] + 결과_파트2[나];
    }
  }
}

function part2() {
  const result = readFile().map(v => {
    const [상대방, 나] = v;

    return 뭘_내지_판별(상대방 as 상대방_타입, 나 as 나_타입);
  });

  return arraySum(result);
}

console.log(part2());
