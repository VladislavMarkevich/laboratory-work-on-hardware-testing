//@flow

import type { Memory } from "../types";

const MarchUR = (memory: Memory): boolean => {
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
    const bitPointerSecond = memory[bitPointer].pointer;
    //$FlowFixMe
    if (
      !memory[baseBitPointer] ||
      !memory[baseBitPointer].changeValue ||
      //$FlowFixMe
      !memory[bitPointer] ||
      !memory[bitPointer].changeValue ||
      //$FlowFixMe
      !memory[bitPointerSecond] ||
      !memory[bitPointerSecond].changeValue
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
    if (memory[bitPointer].value !== 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeBitValueByPointer(0);
    //$FlowFixMe
    if (memory[bitPointerSecond].value === 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointer].changeBitValueByPointer(1);
    //$FlowFixMe
    if (memory[bitPointer].value === 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeBitValueByPointer(0);
    //$FlowFixMe
    if (memory[bitPointer].value !== 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeBitValueByPointer(0);
    //$FlowFixMe
    if (memory[bitPointer].value !== 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    if (memory[bitPointer].value !== 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeBitValueByPointer(1);
    //$FlowFixMe
    if (memory[baseBitPointer].value === 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[baseBitPointer].changeValue(1);
  });
  return ret;
};

export default MarchUR;
