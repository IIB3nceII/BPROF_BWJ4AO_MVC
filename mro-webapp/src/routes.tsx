import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function Routes() {
    return (
        <div className="view-routes">
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
        </div>
    )
}

export default Routes;