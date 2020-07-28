//@flow

const isEmpty = (value: any): boolean => {
  switch (typeof value) {
    case "boolean":
      return false;
    case "number":
      return !Number.isNaN(value);
    case "string":
      return value === "";
    case "object":
      if (!Boolean(value)) return true;
      return Object.keys(value).length === 0;
    case "undefined":
      return true;
    default:
      return true;
  }
};

export default isEmpty;
