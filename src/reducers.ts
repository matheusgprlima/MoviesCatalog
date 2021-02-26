import { combineReducers } from "redux";
import movieReducer from "./store/ducks/movie/movieReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;
