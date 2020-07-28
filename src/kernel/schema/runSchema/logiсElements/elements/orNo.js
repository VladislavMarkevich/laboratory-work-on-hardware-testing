//@flow
import { getBooleans as parseArguments } from "kernel/formatter/getBooleans";
import { getLogicElementResult as or } from "./or";
import { getLogicElementResult as no } from "./no";

export function getLogicElementResult(): boolean {
  const args = Array.prototype.slice.call(arguments);
  const correctedArg = parseArguments.apply(this, args);
  if (correctedArg.lenght === 0) return false;
  const orValue = or.apply(this, correctedArg);
  return no(orValue);
}
