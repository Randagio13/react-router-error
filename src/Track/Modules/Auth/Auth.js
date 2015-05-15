import React from 'react';
import {Route} from 'core-routing';

import Layout from './Layout';
import Login from './Screen/Login';

var Modules = {
    Layout: Layout,
    Login: Login,
    Routes: (
        <Route name="auth" path="auth" handler={Layout}>
            <Route name="auth.login" path="login" handler={Login}/>
        </Route>
    )
};
export default Modules;