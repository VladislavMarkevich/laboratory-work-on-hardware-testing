//@flow
import LFSR from "lfsr";

export const getSequence = () => {
  const bitLenght = 8;
  const polynomial = parseInt("11011111", 2);
  const lfsr = new LFSR(bitLenght, polynomial);

  const ret = [];
  const firstValue = lfsr.seq(bitLenght);
  ret.push(firstValue);

  const generation = () => {
    const value = lfsr.seq(bitLenght);
    if (value === firstValue) return;
    ret.push(value);
    generation();
  };
  generation();

  return ret;
};
