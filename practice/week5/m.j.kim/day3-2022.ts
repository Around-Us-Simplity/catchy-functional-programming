export const getShareArray = (one: string, two: string): string[] =>
  [...one].reduce<string[]>((acc, str) => (two.includes(str) ? [...acc, str] : acc), []);
