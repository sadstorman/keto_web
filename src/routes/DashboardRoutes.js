import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Contacto } from '../components/Contacto';
import { Info } from '../components/Info';
import {Navbar} from '../components/ui';
import { WebKeto } from '../WebKeto';

export const DashboardRoutes = () => {

    return (
        <Router >
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={WebKeto} />
                    <Route exact path="/info" component={Info} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}