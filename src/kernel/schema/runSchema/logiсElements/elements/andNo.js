//@flow
import { getBooleans as parseArguments } from "kernel/formatter/getBooleans";
import { getLogicElementResult as and } from "./and";
import { getLogicElementResult as no } from "./no";

export function getLogicElementResult(): boolean {
  const args = Array.prototype.slice.call(arguments);
  const correctedArg = parseArguments.apply(this, args);
  if (correctedArg.lenght === 0) return false;
  const andValue = and.apply(this, correctedArg);
  return no(andValue);
}
