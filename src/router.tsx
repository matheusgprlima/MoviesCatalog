import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListMovies } from "./pages/ListMovies";
import { SearchMovies } from "./pages/SearchMovies";
export function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchMovies} />
        <Route path="/list-movies" component={ListMovies} />
      </Switch>
    </BrowserRouter>
  );
}
