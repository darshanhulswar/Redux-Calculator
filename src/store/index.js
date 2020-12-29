import { createStore } from "redux";
import calculationReducer from "../reducers/calculationReducer";

const store = createStore(
  calculationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
