import * as fs from "fs";
import * as readline from "readline";

// 한 줄씩 읽어들이는 함수 정의
export async function processFile(filename: string, cbLine: (line: string) => boolean | undefined, initValue: number) {
  return new Promise<number>(resolve => {
    const instream = fs.createReadStream(filename);
    const reader = readline.createInterface(instream, process.stdout);
    let val = initValue;

    // 한 줄씩 읽어들인 후에 발생하는 이벤트
    reader.on("line", (line: string) => {
      if (!line) return;
      cbLine(line) && val++;
    });

    // 모두 읽어들였을 때 발생하는 이벤트
    reader.on("close", () => {
      resolve(val);
    });
  });
}

export const isContain = (sStart: number, sEnd: number, eStart: number, eEnd: number) => {
  return (sStart <= eStart && sEnd >= eEnd) || (sStart >= eStart && sEnd <= eEnd);
};

export const isOverlap = (sStart: number, sEnd: number, eStart: number, eEnd: number) =>
  (sStart <= eStart && eStart <= sEnd) || (eStart <= sStart && sStart <= eEnd);
