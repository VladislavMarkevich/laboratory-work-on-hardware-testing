//@flow
import type { Lab3Lab4TipicalReduxStore } from "./lab3Lab4TipicalReduxStore";
import type { Lab1Lab2TipicalReduxStore } from "./lab1Lab2TipicalReduxStore";
import type { Lab5TipicalReduxStore } from "./lab5TipicalReduxStore";
export * from "./lab3Lab4TipicalReduxStore";
export * from "./lab1Lab2TipicalReduxStore";
export * from "./lab5TipicalReduxStore";

export type ReduxStore = {
  lab1: Lab1Lab2TipicalReduxStore,
  lab2: Lab1Lab2TipicalReduxStore,
  lab3: Lab3Lab4TipicalReduxStore,
  lab4: Lab3Lab4TipicalReduxStore,
  lab5: Lab5TipicalReduxStore,
};
