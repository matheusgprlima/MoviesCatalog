import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { reducers } from "./ducks";

export default configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: [...getDefaultMiddleware()],
});
