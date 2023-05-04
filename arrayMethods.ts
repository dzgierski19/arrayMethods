const data = [1, 8, 4, 5];

interface Lengthy {
  length: number;
}

const entriesFn = <T>(arr: T[]): [number, T][] => {
  const emptyArray: [number, T][] = [];
  for (let i = 0; i < arr.length; i++) {
    emptyArray.push([i, arr[i]]);
  }
  return emptyArray;
};

console.log(entriesFn(data));

function* entriesFn2<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    yield [i, arr[i]];
  }
}

const entriesFn3 = entriesFn2(data);

for (let i = 0; i < data.length; i++) {
  console.log(entriesFn3.next());
}

const reduceFn = <T>(
  array: T[],
  callback: (accumulator: T, currentValue: T, index: number) => T,
  initialValue?: T
) => {
  let accumulator = initialValue ? initialValue : array[0];
  if (accumulator === initialValue) {
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i);
    }
    return accumulator;
  } else {
    for (let i = 1; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i);
    }
    return accumulator;
  }
};

console.log(
  reduceFn(data, (accumulator, currentValue) => accumulator * currentValue, 5)
);

const mapFn = <T, K>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => K
) => {
  const emptyArray: K[] = [];
  for (let i = 0; i < array.length; i++) {
    emptyArray.push(callback(array[i], i, array));
  }
  return emptyArray;
};

console.log(mapFn(data, (element) => element * 2));
console.log(mapFn(data, (element) => Number(Math.sqrt(element).toFixed(2))));

function isAllX(string: string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "x" || string[i] === "X") {
      i++;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isAllX("xxxxxxX"));

const everyFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i)) {
      return false;
    }
  }
  return true;
};

console.log(everyFn(data, (element) => element < 10));

const someFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return true;
    }
  }
  return false;
};
console.log(someFn(data, (element) => element > 11));

const forEachFn = <T>(
  array: T[],
  callback: (element: T, index: number) => T
) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
  return undefined;
};

console.log(forEachFn(data, (element, index) => element + 1 * index));

const filterFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
) => {
  const emptyArray: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      emptyArray.push(array[i]);
    }
  }
  return emptyArray;
};

console.log(filterFn(data, (element) => element % 2 === 0));
