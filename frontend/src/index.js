


import React ,{useState} from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";

import { Provider } from 'react-redux';
import store from "JS/store";
import Authen from "views/Auth/Auth";
import Chat  from "views/ForexChat/Chat/Chat";
import Join from "views/ForexChat/Join";



ReactDOM.render(
  
  <Provider store={store}>
  <BrowserRouter>
  <Route path="/admin/auth" exact component ={Authen} />
  
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/chat" component={Chat} />
        <Redirect from="/" to="/admin/dashboard" />
        </Switch>
        
      
      
      

    
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
