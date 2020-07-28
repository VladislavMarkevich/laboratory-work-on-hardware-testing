import { composeWithDevTools } from "redux-devtools-extension";

const getDevTools = (middleware) => composeWithDevTools(middleware);

export default getDevTools;
