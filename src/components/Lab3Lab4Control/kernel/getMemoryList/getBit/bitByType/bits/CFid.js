//@flow

import type { Bit } from "../../../../../kernel/types";

const defaultBit: Bit = {
  changeValue(newValue) {
    if (newValue) {
      this.value = newValue;
      this.changeBitValueByPointer(1, "stop");
      return;
    }
    if (this.value === 0) {
      this.value = 1;
      this.changeBitValueByPointer(1, "stop");
      return;
    }
    if (this.value === 1) {
      this.value = 0;
      this.changeBitValueByPointer(1, "stop");
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
