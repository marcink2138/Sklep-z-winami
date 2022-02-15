import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Hello from './mainPage-component/hello';
import CustomerLoginPage from "./login-component/customerLoginPage";
import history from './history';
import ImporterLoginPage from "./importer-login-component/importerLoginPage";
import ProductList from "./product-component/productList";
import Filter from "./filter-component/filter"
import FinalImporterPage from "./Importer-page/finalimporterpage";
export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Hello} />
                <Route path="/CustomerLoginPage" component={CustomerLoginPage} />
                <Route path="/ImporterLoginPage" component={ImporterLoginPage} />
                <Route path="/ProductList" component={Filter} />
                <Route path="/ImporterPage" component={FinalImporterPage} />
            </Switch>
        )
    }
}