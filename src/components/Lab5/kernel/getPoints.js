//@flow
import { getSequence } from "./index";
import { createActions } from "redux-actions";

import { LAB5_CHANGE_VALUE } from "./actionTypes";

import type { Dispatch, GetState } from "store/types";

const { lab5ChangeValue } = createActions(LAB5_CHANGE_VALUE);

const getPoints = () => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  const { lab2: { results = {} } = {} } = state;
  const pointSet = new Set();

  Object.keys(results).forEach((key) => {
    const { [key]: result } = results;
    for (let index = 0; index < result.length; index++) pointSet.add(result[index]);
  });

  const uniqPoint = [...pointSet];
  const uniqPointByInt = uniqPoint.map((it) => {
    return parseInt(it, 2);
  });

  const sequence = getSequence();

  const sequenceWithPoint = sequence.reduce((result, value) => {
    const hasInPoints = uniqPointByInt.includes(value);
    result.push({ value, hasInPoints });
    return result;
  }, []);

  const pointsWithCount = [];
  let buffer = 0;
  let bufferValue = null;

  for (let index = 0; index < sequenceWithPoint.length; index++) {
    const { value, hasInPoints } = sequenceWithPoint[index];
    if (!hasInPoints) {
      buffer++;
    } else {
      pointsWithCount.push({
        firstValue: bufferValue,
        secondValue: value,
        buffer,
      });
      buffer = 0;
      bufferValue = value;
    }
    if (index === sequenceWithPoint.length - 1) {
      pointsWithCount[0]["firstValue"] = bufferValue;
      pointsWithCount[0]["buffer"] = pointsWithCount[0].buffer + buffer;
    }
  }

  let bufferIndex = 0;

  for (let index = 0; index < pointsWithCount.length; index++) {
    const { buffer: firstBuffer } = pointsWithCount[index];
    const { buffer: secondBuffer } = pointsWithCount[bufferIndex];
    if (firstBuffer > secondBuffer) bufferIndex = index;
  }

  dispatch(lab5ChangeValue(pointsWithCount[bufferIndex]));
};

export default getPoints;
