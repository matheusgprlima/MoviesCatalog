import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListMovies } from "./pages/ListMovies";
export function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListMovies} />
      </Switch>
    </BrowserRouter>
  );
}
