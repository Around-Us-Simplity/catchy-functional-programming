// 12
type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  purchaseList: { price: number }[];
};

const customerList: Customer[] = [];
// 1.
customerList.map(({ firstName, lastName, address }) => ({ firstName, lastName, address }));
// 2.
customerList.filter(({ id }) => !(id % 3));

const sum = (numbers: number[]) => numbers.reduce((acc, num) => acc + num, 0);
const productf = (numbers: number[]) => numbers.reduce((acc, num) => acc + num, 1);
sum([]);
productf([]);

const minReducer = (acc: number, val: number) => (val > acc ? val : acc);
const maxReducer = (acc: number, val: number) => (val < acc ? val : acc);
[1].reduce(minReducer, Number.MAX_SAFE_INTEGER);
[1].reduce(maxReducer, Number.MIN_SAFE_INTEGER);

const isArrayNumber = (arr: unknown[]): arr is number[] => arr.every(el => typeof el === "number");

const maxByFunction = <T = number, U = T>(arr: T[], cb?: (acc: U, val: T) => U, init?: U) => {
  if (cb && init) {
    return arr.reduce(cb, init);
  } else if (isArrayNumber(arr)) {
    return arr.reduce(maxReducer, Number.MIN_SAFE_INTEGER);
  }
  throw new Error("input correct parameter");
};
maxByFunction([1, 2, 3]);

const mapReducer =
  <T, U>(cb: (param: T) => U) =>
  (acc: U[], param: T) =>
    [...acc, cb(param)];
const filterReducer =
  <T>(condition: (param: T) => boolean) =>
  (acc: T[], param: T) =>
    condition(param) ? [...acc, param] : acc;

[{ id: 1 }, { id: 2 }, { id: 3 }].reduce<number[]>(
  mapReducer(({ id }) => id),
  [],
);

[1, 2, 3].reduce<number[]>(
  filterReducer(val => !!(val % 2)),
  [],
);
