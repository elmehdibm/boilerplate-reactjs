import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './containers/Home';
import HomePage from './containers/HomePage';

const Routes = () => (
    <Router>
        <Home>
            <Route
                exact
                path={"/"}
                component={HomePage}
            />
        </Home>
    </Router>
);

export default Routes;
