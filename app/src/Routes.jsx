import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Hello from './mainPage-component/hello';
import CustomerLoginPage from "./login-component/customerLoginPage";
import history from './history';
import ImporterLoginPage from "./importer-login-component/importerLoginPage";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Hello} />
                    <Route path="/CustomerLoginPage" component={CustomerLoginPage} />
                    <Route path="/ImporterLoginPage" component={ImporterLoginPage} />
                </Switch>
            </Router>
        )
    }
}