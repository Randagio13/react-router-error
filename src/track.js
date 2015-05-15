import React from 'react';
import Router from 'core-routing';
import {Routes} from './Track/Track';

Router.run(Routes, function (Handler, state) {
    console.log(state);
    React.render(<Handler/>, document.body);
});