import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'

class Router extends Component {
  state = {
    login: JSON.parse(localStorage.getItem("currentUser")) ? true : false
  }
    render() {
      const { login } = this.state
        return (
            <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={Login}/>
                      <PrivateRoute path="/dashboard" login={login} component={Dashboard}/>
                    </Switch>
            </BrowserRouter>
         );
    }
}

const Navbar = () => {
  return (
    <div>
      <strong>Navbar</strong>
    </div>
  )
}

const PrivateRoute = ({ component: Component, login, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => login ?
                <Component exact {...props} /> :
                <Redirect to="/" />}
        />
    )
}

export default Router;
