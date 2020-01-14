import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/App"

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'
import User from "./pages/User/User";
import Forbidden from "./pages/Forbidden";
import Del from "./pages/Del";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  
  <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}> 
  <BrowserRouter>
    <Switch>   
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />      
      <PrivateRoute path="/app" component={Home} />      
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/del" component={Del} />      
      <PrivateRoute path="/forbidden" component={Forbidden} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>  
   
  </BrowserRouter>
  </Provider> 
 
  
);

export default Routes;