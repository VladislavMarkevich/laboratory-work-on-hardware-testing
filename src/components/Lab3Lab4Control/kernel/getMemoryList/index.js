//@flow
import getRandomInt from "kernel/system/getRandomInt";

import getDefaultMemory from "./getDefaultMemory";
import getBit from "./getBit";

import type { MemoryList, Memory, Bit } from "../types";
import type { Constans } from "../../constans";

const killMemory = (newMemory: Memory, size: number, deadBitsCount: number, deadBit: ?Bit): void => {
  for (let index = 0; index < deadBitsCount; index++) {
    const bitIndex = getRandomInt(size);

    const newBit = deadBit
      ? {
          ...deadBit,
          // $FlowFixMe
          value: newMemory[bitIndex].value,
          // $FlowFixMe
          pointer: newMemory[bitIndex].pointer,
        }
      : deadBit;

    newMemory[bitIndex] = newBit;
  }
};

const getMemory = (size: number, deadBitsCount: number, breakdownsMemory: $ReadOnlyArray<string>): Memory => {
  const memory = getDefaultMemory(size);

  breakdownsMemory.forEach((breakdown) => {
    const deadBit = getBit(breakdown, { memory });
    killMemory(memory, size, deadBitsCount, deadBit);
  });

  return memory;
};

const getMemoryList = ({ memorySize = 0, deadBitsCount = 0, breakdownsMemoryObjects = [] }: Constans): MemoryList => {
  return breakdownsMemoryObjects.reduce((result, breakdownsMemoryObjects) => {
    const memory = getMemory(memorySize, deadBitsCount, breakdownsMemoryObjects);
    result.push(memory);
    return result;
  }, []);
};

export default getMemoryList;
