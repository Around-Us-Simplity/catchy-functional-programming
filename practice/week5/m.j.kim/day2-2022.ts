type destructuredArray = ["A" | "B" | "C", "X" | "Y" | "Z"];

export const ScoreCalculator = {
  A: {
    X: 1 + 3,
    Y: 2 + 6,
    Z: 3 + 0,
  },
  B: {
    X: 1 + 0,
    Y: 2 + 3,
    Z: 3 + 6,
  },
  C: {
    X: 1 + 6,
    Y: 2 + 0,
    Z: 3 + 3,
  },
};

export const SecondScoreCalculator = {
  A: {
    X: 3,
    Y: 4,
    Z: 8,
  },
  B: {
    X: 1 + 0,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 2,
    Y: 6,
    Z: 7,
  },
};

type SCalculatorType = typeof ScoreCalculator;

export const dayTwoReducer = (calculator: SCalculatorType) => (acc: number, score: string) => {
  if (!score) return acc;
  const [enemy, me] = score.split(" ") as destructuredArray;
  return acc + calculator[enemy][me];
};
