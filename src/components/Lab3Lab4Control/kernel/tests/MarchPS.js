//@flow

import type { Memory } from "../types";

const MarchPS = (memory: Memory): boolean => {
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
    const bitPointerThird = memory[bitPointerSecond].pointer;
    //$FlowFixMe
    const bitPointerFourth = memory[bitPointer].pointer;
    //$FlowFixMe
    if (
      !memory[baseBitPointer] ||
      !memory[baseBitPointer].changeValue ||
      //$FlowFixMe
      !memory[bitPointer] ||
      !memory[bitPointer].changeValue ||
      //$FlowFixMe
      !memory[bitPointerSecond] ||
      !memory[bitPointerSecond].changeValue ||
      //$FlowFixMe
      !memory[bitPointerThird] ||
      !memory[bitPointerThird].changeValue ||
      //$FlowFixMe
      !memory[bitPointerFourth] ||
      !memory[bitPointerFourth].changeValue
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
    memory[bitPointer].changeValue(1);
    //$FlowFixMe
    if (memory[bitPointer].value !== 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointer].changeValue(0);
    //$FlowFixMe
    if (memory[bitPointer].value !== 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointer].changeValue(1);
    //$FlowFixMe
    if (memory[bitPointerSecond].value === 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointerSecond].changeValue(0);
    //$FlowFixMe
    if (memory[bitPointerSecond].value !== 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointerSecond].changeValue(1);
    //$FlowFixMe
    if (memory[bitPointerSecond].value !== 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    if (memory[bitPointerThird].value === 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointerThird].changeValue(0);
    //$FlowFixMe
    if (memory[bitPointerThird].value !== 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointerThird].changeValue(1);
    //$FlowFixMe
    if (memory[bitPointerThird].value !== 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointerThird].changeValue(0);
    //$FlowFixMe
    if (memory[bitPointerFourth].value === 0) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointerFourth].changeValue(1);
    //$FlowFixMe
    if (memory[bitPointerFourth].value !== 1) {
      ret = false;
      debugger;
      return;
    }
    //$FlowFixMe
    memory[bitPointerFourth].changeValue(0);
    //$FlowFixMe
    if (memory[bitPointerFourth].value !== 0) {
      ret = false;
      debugger;
      return;
    }
  });
  return ret;
};

export default MarchPS;
