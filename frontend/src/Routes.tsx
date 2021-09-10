import { Dashboard } from "pages/Dashboard";
import { Home } from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
