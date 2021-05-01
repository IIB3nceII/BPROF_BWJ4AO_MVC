import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import SignIn from './components/Auth/SignIn';
import Home from './components/Home/Home';

function Routes() {
    return (
        <div className="view-routes">
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/" component={Home}></Route>
            </Switch>
        </div>
    )
}

export default Routes;