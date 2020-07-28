//@flow
import type { ReduxStore } from "./reduxStore";

export type Selector<TProps, TResult> = (state: ReduxStore, props: TProps, ...rest: $ReadOnlyArray<any>) => TResult;

export type ReducerAction<T, TMeta = any> = {|
  type: string,
  payload: T,
  error?: true,
  meta?: TMeta,
|};

export type Dispatch = (any) => any;
export type GetState = () => ReduxStore;
