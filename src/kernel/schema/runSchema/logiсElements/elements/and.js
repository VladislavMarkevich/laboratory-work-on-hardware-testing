//@flow
import { getBooleans as parseArguments } from "kernel/formatter/getBooleans";

export function getLogicElementResult(): boolean {
  const args = Array.prototype.slice.call(arguments);
  const correctedArg = parseArguments.apply(this, args);
  if (correctedArg.lenght === 0) return false;
  return correctedArg.every((it) => it);
}
