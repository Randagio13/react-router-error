import React from 'react';
import {Route} from 'core-routing';

import Layout from './Layout';
import Auth from './Modules/Auth/Auth';

export var Routes = (
    <Route name="root" path="/" handler={Layout}>
        {Auth.Routes}
    </Route>
);