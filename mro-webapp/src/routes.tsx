import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import SignIn from "./components/Auth/SignIn";
import Home from "./components/Home/Home";
import CreateNew from "./components/Manage/CreateNew";
import EditCategory from "./components/Manage/EditCategory";
import EditCompetitor from "./components/Manage/EditCompetitor";
import EditSponsor from "./components/Manage/EditSponsor";
import ViewData from "./components/Manage/ViewData";

function Routes() {
  return (
    <div className="view-routes">
      <Switch>
        <Route path="/view" component={ViewData} />
        <Route path="/editcategory/:id" component={EditCategory} />
        <Route path="/editcompetitor/:id" component={EditCompetitor} />
        <Route path="/editsponsor/:id" component={EditSponsor} />
        <Route path="/create" component={CreateNew} />
        <Route path="/register" component={Register} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default Routes;
