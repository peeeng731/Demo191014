import React, { Component } from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin';
import User from './pages/sys/user';
import Dept from './pages/sys/dept';
import Role from './pages/sys/role';
import Menu from './pages/sys/menu';
import NoMatch from './pages/nomacth';
class IRouter extends Component {
    state = {  }
    render() { 
        return ( 
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/modules/sys/user.html' component={User} />
                                <Route path='/admin/modules/sys/dept.html' component={Dept} />
                                <Route path='/admin/modules/sys/role.html' component={Role} />
                                <Route path='/admin/modules/sys/menu.html' component={Menu} />
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }
                    />
                </App>
            </HashRouter>
         );
    }
}
 
export default IRouter;