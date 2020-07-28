//@flow

export type Constans = {
  memorySize: number,
  deadBitsCount: number,
  breakdownsMemoryObjects: $ReadOnlyArray<$ReadOnlyArray<string>>,
};

const memorySize: number = 10000;

//const memorySize: number = 4 * 1024 * 1024; //NOTE: 4Mbit

const deadBitsCount = Math.trunc(memorySize / 10000) + 1;

const breakdownsMemoryObjects: $ReadOnlyArray<$ReadOnlyArray<string>> = [
  [],
  ["SAF"],
  ["CFin"],
  ["CFin", "SAF"],
  ["CFid"],
  ["CFid", "SAF"],
  ["CFid", "CFin"],
  ["CFid", "CFin", "SAF"],
  ["AF"],
  ["AF", "SAF"],
  ["AF", "CFin"],
  ["AF", "CFin", "SAF"],
  ["AF", "CFid"],
  ["AF", "CFid", "SAF"],
  ["AF", "CFid", "CFin"],
  ["AF", "CFid", "CFin", "SAF"],
];

const constans: Constans = {
  memorySize,
  deadBitsCount,
  breakdownsMemoryObjects,
};

export default constans;
