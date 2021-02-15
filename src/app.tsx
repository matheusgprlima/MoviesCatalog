import { Provider } from "react-redux";
import { Routers } from "./router";
import store from "./store";
import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};
