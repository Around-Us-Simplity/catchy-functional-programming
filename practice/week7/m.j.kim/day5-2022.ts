export const firstInitValue = {
  stacks: [],
  moves: [],
  flag: false,
};

type SplitStackAndMove = {
  stacks: string[];
  moves: number[][];
  flag: boolean;
};

const movesReducer = (move: string) =>
  move.split(" ").reduce<number[]>((res, str, idx) => (idx % 2 ? [...res, parseInt(str)] : res), []);

export const splitReducer = (inputs: string[], initValue: SplitStackAndMove = firstInitValue) =>
  inputs.reduce(
    (acc, input) =>
      !acc.flag
        ? input.trim()[0] !== "1"
          ? { ...acc, stacks: [...acc.stacks, input] }
          : { ...acc, flag: true }
        : input
        ? { ...acc, moves: [...acc.moves, movesReducer(input)] }
        : acc,
    { ...initValue },
  );
export const stacksRearranger = (stacks: string[]) =>
  stacks.reduceRight<string[][]>(
    (acc, line) => {
      let i, idx, letter;
      const strLen = line.length;
      for (i = 1; i < strLen; i += 4) {
        letter = line[i];
        if (!letter.trim()) continue;
        idx = (i - 1) / 4 + 1;
        if (Array.isArray(acc[idx])) {
          acc[idx].push(letter);
        } else {
          acc[idx] = [letter];
        }
      }
      return acc;
    },
    [[]],
  );

export const firstReducer = (moves: number[][], stacks: string[][]) =>
  moves.reduce(
    (acc, [move, from, to]) => {
      let cnt = move;
      while (cnt) {
        acc[to].push(acc[from].pop() as string);
        cnt -= 1;
      }
      return acc;
    },
    stacks.map(stack => stack.slice()),
  );

export const getAnswer = (result: string[][]) => result.reduce((acc, stack) => acc + stack.pop(), "");

export const secondReducer = (moves: number[][], stacks: string[][]) =>
  moves.reduce(
    (acc, [move, from, to]) => {
      acc[to] = [...acc[to], ...acc[from].slice(-move)];
      acc[from] = acc[from].slice(0, -move);
      return acc;
    },
    stacks.map(stack => stack.slice()),
  );
