import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}
