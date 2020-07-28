//@flow

export type DefaultCube = {
  inputs: $ReadOnlyArray<number | string>,
  result: number | string,
};

export type SingularCube = {
  resultingSets: $ReadOnlyArray<DefaultCube>,
  otherResults: $ReadOnlyArray<DefaultCube>,
};

export type getSingulareCube = (number, string) => SingularCube;

export type getSingularCubeByLogicElement = {
  no: getSingulareCube,
  and: getSingulareCube,
  or: getSingulareCube,
  andNo: getSingulareCube,
  orNo: getSingulareCube,
  xor: getSingulareCube,
};

export type PrimitiveDcubes = $ReadOnlyArray<DefaultCube>;

export type IntersectionsSingularCubes = $ReadOnlyArray<{
  [string]: string | number,
}>;
export type GetIntersectionsSingularCubes = (string, string) => IntersectionsSingularCubes;

export type ConstantSymbols = {
  indifferentSymbol: string,
  identicalValueSymbol: string,
  oppositeIdenticalValueSymbol: string,
  errorSymbol: string,
};
