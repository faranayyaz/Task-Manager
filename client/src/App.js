import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header-com";
import DashBoard from "./pages/dashboard/dashboard-com";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.com";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import TaskRedirectPage from "./pages/taskRedirectPage/taskRedirectPage-com";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={TaskRedirectPage} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/login" component={SignInSignUp} />
        <Route exact path="/signup" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
