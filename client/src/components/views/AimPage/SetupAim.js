import React, { Fragment } from 'react';
import {combineReducers} from "redux"
import List from './pages/ListPage'
import {Route,Switch} from "react-router-dom";
import Header from './Header';
import BoardPage from './pages/BoardPage';
import ListPage from './pages/ListPage';

function AimSetting() {
    return(
            <Switch>
            <Route exact path="/aim" component={BoardPage}></Route>
            <Route exact path="/board/:id" component={ListPage}></Route>
            </Switch>
    )
}

export default AimSetting;