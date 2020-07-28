//@flow
import { getBooleans as parseArguments } from "kernel/formatter/getBooleans";

export function getLogicElementResult(): boolean {
  const args = Array.prototype.slice.call(arguments);
  const correctedArg = parseArguments.apply(this, args);
  if (correctedArg.lenght === 0) return false;
  const allTrue = correctedArg.every((it) => it);
  const allFalse = correctedArg.every((it) => !it);
  return !(allTrue || allFalse);
}
