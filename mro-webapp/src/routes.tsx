import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import SignIn from "./components/Auth/SignIn";
import Home from "./components/Home/Home";
import CreateNew from "./components/Manage/CreateNew";
import Edit from "./components/Manage/Edit";
import ViewData from "./components/Manage/ViewData";

function Routes() {
  return (
    <div className="view-routes">
      <Switch>
        <Route path="/view" component={ViewData} />
        <Route path="/edit" component={Edit} />
        <Route path="/create" component={CreateNew} />
        <Route path="/register" component={Register} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default Routes;
