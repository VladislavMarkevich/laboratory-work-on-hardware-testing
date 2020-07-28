//@flow

const memorySize: number = 20000;

//const memorySize: number = 2 * 1024 * 1024; //NOTE: 4Mbit

const deadBitsCount = Math.trunc(memorySize / 10000) + 1;

const breakdownsMemoryObjects: $ReadOnlyArray<$ReadOnlyArray<string>> = [[], ["SAF"], ["AF"], ["AF", "SAF"]];

const constans = {
  memorySize,
  deadBitsCount,
  breakdownsMemoryObjects,
};

export default constans;
