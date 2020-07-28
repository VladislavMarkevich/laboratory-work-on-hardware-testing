import type { NormalizedSchema } from "./types";

const getActivationPaths = (
  normalizedSchema: NormalizedSchema,
  lastLogicElementName: string
): { [string]: $ReadOnlyArray<string> } => {
  const retActivationPaths = {};

  const recursion = (normalizedSchema: NormalizedSchema, key: string, result: $ReadOnlyArray<string>): void => {
    const { [key]: { inputs = [] } = {} } = normalizedSchema;
    inputs.forEach((it) => {
      if (typeof it === "string") {
        const recursionBuffer = [].concat(result);
        recursionBuffer.unshift(key);
        recursion(normalizedSchema, it, recursionBuffer);
      }
    });

    retActivationPaths[key] = result;
  };

  recursion(normalizedSchema, lastLogicElementName, []);

  return retActivationPaths;
};

export default getActivationPaths;
