import React, { Component } from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Main from './Main';
class IRouter extends Component {
    state = {  }
    render() { 
        return ( 
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/main' component={Main}/>
                </App>
            </HashRouter>
         );
    }
}
 
export default IRouter;