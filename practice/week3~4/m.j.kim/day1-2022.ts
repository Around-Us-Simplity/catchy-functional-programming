export const totalReducer = (acc: number, str: string | number) => acc + Number(str);

export const firstReducer = (result: number, calories: string[]) => {
  const total = calories.reduce(totalReducer, 0);
  return total > result ? total : result;
};

// const easySecondAnswer = input
//   ?.slice()
//   .sort((a, b) => b.reduce(totalReducer, 0) - a.reduce(totalReducer, 0))
//   .slice(0, 3)
//   .reduce((acc, el) => acc + el.reduce(totalReducer, 0), 0);

export const secondReducer = (result: number[], calories: string[]) => {
  const total = calories.reduce(totalReducer, 0);
  const newPos = result.reduce((prev, curr, idx) => (total >= curr ? idx : prev), -1) + 1;
  return newPos ? [...result.slice(1, newPos), total, ...result.slice(newPos)] : result;
};
