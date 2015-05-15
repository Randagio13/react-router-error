import React from 'react';
import {Screen} from 'core-components';
import {RouteHandler, Link} from 'core-routing';

export default class Layout extends Screen{
    render(){
        return <p key="auth">Auth layout <Link to="auth.login">Accedi</Link> <RouteHandler key="auth.handler"/></p>;
    }
}