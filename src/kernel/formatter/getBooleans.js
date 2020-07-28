//@flow
import { getBoolean } from "./getBoolean";

export function getBooleans(): $ReadOnlyArray<boolean> {
  const args = Array.prototype.slice.call(arguments);
  return args.map((it) => getBoolean(it));
}
