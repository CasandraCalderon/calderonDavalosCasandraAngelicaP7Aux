import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App';
export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routes;