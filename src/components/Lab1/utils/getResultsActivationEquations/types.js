//flow
export type ActivationEquationFunc = (number, string, number) => $ReadOnlyArray<string | boolean>;

export type PathActivationEquations = {
  no: ActivationEquationFunc,
  and: ActivationEquationFunc,
  or: ActivationEquationFunc,
  andNo: ActivationEquationFunc,
  orNo: ActivationEquationFunc,
  xor: ActivationEquationFunc,
};

export type ResultsActivationEquations = {
  [string]: {
    inputs: { [string]: boolean },
    logicElement: { [string]: boolean },
  },
};
