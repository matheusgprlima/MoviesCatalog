import { IMovie, MovieState } from "../../../type";

const initialState: MovieState = { movie: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state: MovieState = initialState,
  action: { type: string; payload: IMovie[] }
) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return (state.movie = action.payload);
    default:
      return state;
  }
};
