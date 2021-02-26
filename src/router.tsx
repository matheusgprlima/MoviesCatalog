import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DetailMovies } from "./pages/movie-details";
import { SearchMovies } from "./pages/search-movies";
export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchMovies} />
        <Route path="/movie-detail/:id" component={DetailMovies} />
      </Switch>
    </BrowserRouter>
  );
}
