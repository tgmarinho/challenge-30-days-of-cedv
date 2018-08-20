import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '../menu/Menu';

import Aceleradores from '../Aceleradores';
// import Moderadores from '../Moderadores';
// import Retardadores from '../Retardadores';

export const Routes = () => (
    <Fragment>

        <Router>
            <Menu>
                <Switch>
                    <div>
                        {/* <Menu /> */}
                        <Route exact path="/" component={Aceleradores} />
                        <Route path="/aceleradores" component={Aceleradores} />
                        {/* <Route path="/retardadores" component={Retardadores} /> */}
                    </div>

                </Switch>
            </Menu>
        </Router>
    </Fragment>
);
