//@flow
import getBit from "./getBit";
import getRandomInt from "../../../../kernel/system/getRandomInt";

import type { GetMemory } from "../types";

type GetGetNextPointerKey = number => () => ?number;
const getGetNextPointerKey: GetGetNextPointerKey = size => {
  const pointers = [];
  for (let index = 0; index < size; index++) pointers.push(index);

  return () => {
    const pointersCount = pointers.length;
    if (pointersCount === 0) return;
    const index = getRandomInt(pointersCount);
    const newValue = pointers[index];
    pointers.splice(index, 1);
    return newValue;
  };
};

const getDefaultMemory: GetMemory = size => {
  const memory = {};
  const getNextPointerKey = getGetNextPointerKey(size);

  for (let index = 0; index < size; index++) {
    const newPointer = getNextPointerKey();
    memory[index] = getBit("default", {
      memory,
      pointer: newPointer
    });
  }

  //NOTE: start workround
  for (let index = 0; index < size; index++) {
    if (memory[index].pointer === index) memory[index].pointer = 0;
  }

  if (memory[0].pointer === 0) memory[0].pointer = 1;
  //NOTE: start workround

  return memory;
};

export default getDefaultMemory;
