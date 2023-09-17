type ValidatorParams = typeof isContain;

const isContain = (sStart: number, sEnd: number, eStart: number, eEnd: number) =>
  (sStart <= eStart && sEnd >= eEnd) || (sStart >= eStart && sEnd <= eEnd);

const isOverlap = (sStart: number, sEnd: number, eStart: number, eEnd: number) =>
  (sStart <= eStart && eStart <= sEnd) || (eStart <= sStart && sStart <= eEnd);

const originReducer = (cb: ValidatorParams) => (acc: number, str: string) => {
  if (!str) return acc;
  const [[sStart, sEnd], [eStart, eEnd]] = str.split(",").map(st => st.split("-").map(el => parseInt(el)));
  return cb(sStart, sEnd, eStart, eEnd) ? acc + 1 : acc;
};

export const firstReducer = originReducer(isContain);

export const secondReducer = originReducer(isOverlap);
