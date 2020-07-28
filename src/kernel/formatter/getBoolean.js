//@flow

export const getBoolean = (arg: any): boolean => {
  const type = typeof arg;
  switch (type) {
    case "boolean":
      return arg;
    case "number":
      return arg >= 1 ? true : false;
    case "string":
      if (arg === "0") return false;
      if (arg === "1") return true;
      return arg !== "";
    case "object":
      return arg !== null;
    case "undefined":
      return false;
    default:
      return true;
  }
};
