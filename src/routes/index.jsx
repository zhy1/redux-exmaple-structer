import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { App, ClassroomApp, LoginApp } from '../containers';


/* react router 2.x 必须配置 browserHistory */
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/ca" component={ClassroomApp}></Route>
        <Route path="/login" component={LoginApp}></Route>
    </Router>
);

export default routes;