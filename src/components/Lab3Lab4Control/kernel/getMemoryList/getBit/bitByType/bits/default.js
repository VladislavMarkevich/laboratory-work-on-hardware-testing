//@flow

import type { Bit } from "../../../../../kernel/types";

const defaultBit: Bit = {
  memory: {},
  value: 0,
  pointer: 0,
  changeValue(newValue) {
    if (typeof newValue === "number") {
      this.value = newValue;
      return;
    }
    if (this.value === 0) {
      this.value = 1;
      return;
    }
    if (this.value === 1) {
      this.value = 0;
      return;
    }
    this.value = newValue;
  },
  changeBitValueByPointer(newValue, stop) {
    if (stop) return;
    if (!this.memory[this.pointer] || !this.memory[this.pointer].changeValue)
      return;
    this.memory[this.pointer].changeValue(newValue);
  }
};

export default defaultBit;
