import React from 'react';
import {Screen} from 'core-components';
import {RouteHandler} from 'core-routing';

import {Navbar, Nav, NavItem, DropdownButton, MenuItem} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';

export default class Layout extends Screen{
    static componentDidUpdate(){
        console.log('Transitionnnn!!!');
    }
    
    render(){
        return <div>
            <div>
                <Navbar inverse fixedTop toggleNavKey={0}>
                    <Nav eventKey={0}> {/* This is the eventKey referenced */}
                        <NavItemLink eventKey={1} to="auth" className="with-icon">
                            <span className="icon fa fa-user"></span>    
                            <span>Accedi</span>
                        </NavItemLink>
                        <NavItemLink eventKey={2} to="root" className="with-icon">
                            <span className="icon fa fa-home"></span>    
                            <span>Home</span>
                        </NavItemLink>
                        <DropdownButton eventKey={3} title='Dropdown'>
                            <MenuItem eventKey='1'>Action</MenuItem>
                            <MenuItem eventKey='2'>Another action</MenuItem>
                            <MenuItem eventKey='3'>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey='4'>Separated link</MenuItem>
                        </DropdownButton>
                    </Nav>
                </Navbar>
            </div>
            <div className="body">
                <RouteHandler key="track.route"/>
            </div>
        </div>;
    }
}