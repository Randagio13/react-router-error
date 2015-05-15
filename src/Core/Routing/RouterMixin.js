import {Router} from 'core-routing';
import t from 'tcomb';
import PropTypes from 'react-router/lib/PropTypes.js';


 var RouterMixin = {
    contextTypes: {
        router: PropTypes.router.isRequired
    },
    transitionToLocal(name, params = {}, query = {}){
        var router = this.constructor.router;
        
        t.assert(router instanceof Router, "You have applyed the Router mixin to an object without the route decorator.");
        
        var route = router.get("name");
        console.log(this);
        this.context.router.transitionTo(route, params, query);
    }
};

export default RouterMixin;