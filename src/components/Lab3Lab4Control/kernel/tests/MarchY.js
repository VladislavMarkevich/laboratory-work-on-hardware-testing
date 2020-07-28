//@flow

import type { Memory } from "../types";

const MarchY = (memory: Memory): boolean => {
  const bitPointers = Object.keys(memory);
  if (!bitPointers) return false;

  let ret = true;

  bitPointers.forEach((baseBitPointer) => {
    if (!ret) return;
    //$FlowFixMe
    bitPointers.forEach((pointer) => (memory[pointer].value = undefined));
    //$FlowFixMe
    const bitPointer = memory[baseBitPointer].pointer;
    //$FlowFixMe
    if (
      !memory[baseBitPointer] ||
      !memory[baseBitPointer].changeValue ||
      //$FlowFixMe
      !memory[bitPointer] ||
      !memory[bitPointer].changeValue
    ) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeValue(0);
    //$FlowFixMe
    if (memory[bitPointer].value === 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    if (!memory[bitPointer].changeBitValueByPointer) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeBitValueByPointer(1);
    //$FlowFixMe
    if (memory[bitPointer].value !== 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    if (memory[baseBitPointer].value === 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeValue(0);
    //$FlowFixMe
    if (memory[baseBitPointer].value !== 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    // if (!memory[baseBitPointer] || memory[baseBitPointer].value === 0) {
    //   ret = false;
    //   return;
    // }
  });
  return ret;
};

export default MarchY;
