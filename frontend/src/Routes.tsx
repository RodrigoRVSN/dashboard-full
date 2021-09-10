import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Dashboard } from "pages/Dashboard";
import { Home } from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
