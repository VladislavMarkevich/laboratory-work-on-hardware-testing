//flow

type LogicElementFunc = () => boolean;

export type LogicElements = {
  no: LogicElementFunc,
  and: LogicElementFunc,
  or: LogicElementFunc,
  andNo: LogicElementFunc,
  orNo: LogicElementFunc,
  xor: LogicElementFunc,
};

export type ShemaElements = {
  logicElementName: string,
  logicElementType: string,
  inputs: $ReadOnlyArray<string | number>,
};

export type ResultOnLogicElement = {
  inputsData: $ReadOnlyArray<number | boolean>,
  output: boolean,
};

export type ResultSchema = {
  resultsOnLogicElement: { [string]: ResultOnLogicElement },
  result: boolean,
};

export type ResultsSchema = {
  maskList?: $ReadOnlyArray<string>,
  results?: { [string]: ResultSchema },
};

export type NormalizedSchema = { [string]: ShemaElements };
