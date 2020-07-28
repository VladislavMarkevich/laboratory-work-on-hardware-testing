//@flow

import type { Memory } from "../types";

const getIsTrueBit = (memory, bitPointer) => {
  return memory[bitPointer] && memory[bitPointer].changeValue;
};

const changeValueInMemory = (memory, bitPointer, value) => {
  if (!getIsTrueBit(memory, bitPointer)) return;
  //$FlowFixMe
  memory[bitPointer].changeValue(value);
};

const GALPAT = (memory: Memory): boolean => {
  const valueForOtherBits = 0;
  const valueForBaseBit = 1;

  const bitPointers = Object.keys(memory);
  if (!bitPointers) return false;

  let ret = true;

  bitPointers.forEach((baseBitPointer) => {
    if (!ret) return;
    bitPointers.forEach((pointer) => {
      changeValueInMemory(memory, pointer, valueForOtherBits);
    });

    changeValueInMemory(memory, baseBitPointer, valueForBaseBit);

    bitPointers.forEach((pointer) => {
      if (pointer === baseBitPointer) return;
      if (!getIsTrueBit(memory, pointer)) {
        ret = false;
        return;
      }
      if (!memory[pointer] || memory[pointer].value !== valueForOtherBits) {
        ret = false;
        return;
      }
    });
  });
  return ret;
};

export default GALPAT;
