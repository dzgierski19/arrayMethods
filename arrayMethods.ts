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
  for (let i = 0; i < array.length; i++) {
    initialValue += callback(accumulator, array[i]);
  }
  return initialValue;
};

console.log(
  reduceFn(data, (accumulator, currentValue) => accumulator + currentValue, 2)
);

// const everyFn = (array, callback) => {};

// const forEachFn = (array, callback) => {};

// const mapFn = (array, callback) => {};

// const filterFn = (array, callback) => {};

// const reduceFn <T> = (array, callback, inital) => {};

// const someFn = (array, callback) => {};
