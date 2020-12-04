import React from 'react';

import Login from './pages/Login/Login';
import Singin from './pages/Singin/Singin';
import Admin from './pages/Admin/Admin';
import Error from './pages/404';
import Atualiza1 from './pages/Atualiza/Atualiza1';
import Atualiza2 from './pages/Atualiza/Atualiza2';
import Userpage from './pages/User/userpage';

import {BrowserRouter,
    Route,
    Switch,
    Redirect
}  from "react-router-dom";

import {isAuthenticated} from './auth';

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route{...rest} render = {props=>
        isAuthenticated() ? (
            <Component{...props}/>
        ) : (
            < Redirect to ={{pathname:'/' , state:{from: props.location} }} />
    )
}
    />
);

//<Route path="/Singin" component={Singin}/>
//   <PrivateRoute path="/User" component={Userpage}/> <PrivateRoute path="/Admin" component={Admin}/>
const Routes = () =>(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login}/>
    <PrivateRoute path="/Admin" component={Admin}/>
    <Route path="/Atualiza1" component={Atualiza1}/>
    <Route path="/Atualiza2" component={Atualiza2}/>
    <PrivateRoute path="/User" component={Userpage}/>
    <Route path="/Singin" component={Singin}/>
    <Route path="" component={Error}/>
    </Switch>
    </BrowserRouter>
)
 export default Routes;
