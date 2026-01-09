export const sortBy = <T>(
  array: T[],
  key: keyof T | ((item: T) => any),
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  const sorted = [...array];
  const getValue = typeof key === 'function' ? key : (item: T) => item[key];

  sorted.sort((a, b) => {
    const aVal = getValue(a);
    const bVal = getValue(b);

    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
};

export const filterBy = <T>(
  array: T[],
  predicate: (item: T, index: number) => boolean
): T[] => {
  return array.filter(predicate);
};

export const findBy = <T>(
  array: T[],
  predicate: (item: T, index: number) => boolean
): T | undefined => {
  return array.find(predicate);
};

export const findIndexBy = <T>(
  array: T[],
  predicate: (item: T, index: number) => boolean
): number => {
  return array.findIndex(predicate);
};

export const sum = (array: number[]): number => {
  return array.reduce((acc, val) => acc + val, 0);
};

export const average = (array: number[]): number => {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
};

export const min = (array: number[]): number => {
  if (array.length === 0) return 0;
  return Math.min(...array);
};

export const max = (array: number[]): number => {
  if (array.length === 0) return 0;
  return Math.max(...array);
};

export const range = (start: number, end: number, step = 1): number[] => {
  const result: number[] = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};

export const partition = <T>(
  array: T[],
  predicate: (item: T) => boolean
): [T[], T[]] => {
  const passed: T[] = [];
  const failed: T[] = [];

  array.forEach((item) => {
    if (predicate(item)) {
      passed.push(item);
    } else {
      failed.push(item);
    }
  });

  return [passed, failed];
};

export const intersection = <T>(...arrays: T[][]): T[] => {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];

  const [first, ...rest] = arrays;
  return first.filter((item) => rest.every((arr) => arr.includes(item)));
};

export const difference = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter((item) => !array2.includes(item));
};

export const union = <T>(...arrays: T[][]): T[] => {
  const combined = arrays.flat();
  return Array.from(new Set(combined));
};

export const flatten = <T>(array: any[], depth = Infinity): T[] => {
  if (depth === 0) return array;
  return array.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flatten(val, depth - 1));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
};

export const compact = <T>(array: (T | null | undefined | false | 0 | '')[]): T[] => {
  return array.filter(Boolean) as T[];
};

export const take = <T>(array: T[], count: number): T[] => {
  return array.slice(0, count);
};

export const takeRight = <T>(array: T[], count: number): T[] => {
  return array.slice(-count);
};

export const drop = <T>(array: T[], count: number): T[] => {
  return array.slice(count);
};

export const dropRight = <T>(array: T[], count: number): T[] => {
  return array.slice(0, -count || array.length);
};

export const sample = <T>(array: T[]): T | undefined => {
  if (array.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const sampleSize = <T>(array: T[], size: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};

export const zip = <T>(...arrays: T[][]): T[][] => {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result: T[][] = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map((arr) => arr[i]));
  }

  return result;
};

export const unzip = <T>(array: T[][]): T[][] => {
  if (array.length === 0) return [];
  return zip(...array);
};

export const countBy = <T>(
  array: T[],
  keyFn: (item: T) => string | number
): Record<string | number, number> => {
  return array.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string | number, number>);
};

export const indexBy = <T>(
  array: T[],
  keyFn: (item: T) => string | number
): Record<string | number, T> => {
  return array.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = item;
    return acc;
  }, {} as Record<string | number, T>);
};

export const move = <T>(array: T[], from: number, to: number): T[] => {
  const result = [...array];
  const [removed] = result.splice(from, 1);
  result.splice(to, 0, removed);
  return result;
};

export const insert = <T>(array: T[], index: number, item: T): T[] => {
  const result = [...array];
  result.splice(index, 0, item);
  return result;
};

export const remove = <T>(array: T[], index: number): T[] => {
  const result = [...array];
  result.splice(index, 1);
  return result;
};

export const update = <T>(array: T[], index: number, item: T): T[] => {
  const result = [...array];
  result[index] = item;
  return result;
};

export default {
  sortBy,
  filterBy,
  findBy,
  findIndexBy,
  sum,
  average,
  min,
  max,
  range,
  partition,
  intersection,
  difference,
  union,
  flatten,
  compact,
  take,
  takeRight,
  drop,
  dropRight,
  sample,
  sampleSize,
  zip,
  unzip,
  countBy,
  indexBy,
  move,
  insert,
  remove,
  update,
};