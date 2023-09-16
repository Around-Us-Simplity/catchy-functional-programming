const scoreTable = new Map(
  [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((alpha, idx) => [alpha, idx + 1]),
);

const getShareArray = (one: string, two: string): string[] =>
  [...one].reduce<string[]>((acc, str) => (two.includes(str) && !acc.includes(str) ? [...acc, str] : acc), []);

export const stringToHalf = (el: string) => [
  el.slice(0, Math.floor(el.length / 2)),
  el.slice(Math.floor(el.length / 2)),
];

export const firstReducer = (acc: number, el: string) => {
  const [one, two] = stringToHalf(el);
  const val = [...one].find(str => two.includes(str)) || "";
  return acc + (scoreTable.get(val) || 0);
};

export const threeStringElement = (acc: string[][], el: string, idx: number) =>
  idx % 3 ? [...acc.slice(0, acc.length - 1), [...acc[acc.length - 1], el]] : [...acc, [el]];

export const secondReducer = (acc: number, [one, two, three]: string[]) => {
  const oneTwo = getShareArray(one, two);
  const twoThree = getShareArray(two, three);
  const getShare = oneTwo.filter(el => twoThree.includes(el))[0];
  return acc + (scoreTable.get(getShare) || 0);
};
