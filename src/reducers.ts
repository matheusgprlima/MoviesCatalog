import { combineReducers } from "redux";
import movieReducer from "./store/ducks/movie/movieReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;
