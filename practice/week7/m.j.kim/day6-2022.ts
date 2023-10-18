export const getAnswer = (data: string, maximum: number) => {
  let i, j;
  const inputLen = data.length;

  for (i = 3; i < inputLen; i++) {
    const obj: Record<string, number[]> = {};
    let temp;
    for (j = 0; j < maximum; j++) {
      temp = obj[data[i + j]];
      obj[data[i + j]] = temp ? [...temp, i + j] : [i + j];
    }
    const values = Object.values(obj);
    if (values.every(val => val.length < 2)) {
      return Math.max(...values.map(([val]) => val));
    }
  }
};
