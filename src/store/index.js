import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";
import getDevTools from "./dev-tools";

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
  const composedEnhancers = getDevTools(middlewareEnhancer, monitorReducersEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
