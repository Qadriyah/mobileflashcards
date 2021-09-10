import { combineReducers } from "redux";
import deckReducer from "./deck";

const rootReducer = combineReducers({
  decks: deckReducer,
});

export default rootReducer;
