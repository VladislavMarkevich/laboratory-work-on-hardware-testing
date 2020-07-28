//@flow

import type { Bit } from "../../../../../kernel/types";

const SAFBit: Bit = {
  changeValue(newValue) {
    return;
  },
  changeBitValueByPointer(newValue, stop) {
    if (stop) return;
    if (!this.memory[this.pointer] || !this.memory[this.pointer].changeValue)
      return;
    this.memory[this.pointer].changeValue(newValue);
  }
};

export default SAFBit;
