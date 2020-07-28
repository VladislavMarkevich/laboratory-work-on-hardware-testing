import { combineReducers } from "redux";
import lab1 from "components/Lab1/utils/reducers";
import lab2 from "components/Lab2/utils/reducers";
import lab3 from "components/Lab3/reducers";
import lab4 from "components/Lab4/reducers";
import lab5 from "components/Lab5/kernel/reducers";

const combine = combineReducers({
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
});

export default combine;
