const data = [1, 2, 4, 5];

interface Lengthy {
  length: number;
}

const entriesFn = <T>(arr: T[]): T[] => {
  const emptyArray: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    emptyArray.push([i, arr[i]]);
  }
  return emptyArray;
};

//nie rozumiem dlaczego nie mozna dać w 8. linijce T

console.log(entriesFn(data));

const reduceFn = <T>(
  array: T[],
  callback: (accumulator: T, currentValue: T) => T,
  initialValue: T
) => {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};

console.log(
  reduceFn(data, (accumulator, currentValue) => accumulator * currentValue, 5)
);

const mapFn = <T>(array: T[], callback: (element: T) => T) => {
  const emptyArray: T[] = [];
  for (let i = 0; i < array.length; i++) {
    emptyArray.push(callback(array[i]));
  }
  return emptyArray;
};

console.log(mapFn(data, (element) => element * 2));
console.log(mapFn(data, (element) => Math.sqrt(element)));

// const everyFn = (array, callback) => {};

// const forEachFn = (array, callback) => {};

// const filterFn = (array, callback) => {};

// const someFn = (array, callback) => {};
