import { IMovie } from "../../../type";

const initialState: IMovie[] = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "UPDATE_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
