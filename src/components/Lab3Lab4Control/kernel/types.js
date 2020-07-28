//@flow

type BitValue = number; //NOTE: 0 | 1

export type Bit = {
  memory?: { [number]: Bit }, //NOTE: this is Memory type
  value?: BitValue,
  pointer?: ?number,
  changeValue?: (number) => void,
  changeBitValueByPointer?: (number) => void,
};

export type BitByType = {
  default: Bit,
  AF: ?Bit,
  SAF: Bit,
  CFin: Bit,
  CFid: Bit,
};

export type Memory = { [number | string]: ?Bit };

export type GetBit = (
  string,
  {
    memory?: Memory,
    value?: BitValue,
    pointer?: ?number,
  }
) => Bit;

export type GetMemory = (number) => Memory;

export type MemoryList = $ReadOnlyArray<Memory>;

export type Test = (Memory) => boolean;
export type Tests = {
  GALPAT: Test,
  MarchY: Test,
  "March U-R": Test,
};

export type Constans = {
  memorySize: number,
  deadBitsCount: number,
  breakdownsMemoryObjects: $ReadOnlyArray<$ReadOnlyArray<string>>,
};
