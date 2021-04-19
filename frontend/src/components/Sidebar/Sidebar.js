
import React, { Component ,useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";


function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // console.log("profession",user.result)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("assets/img/reactlogo.png").default}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text" href="iqconcept.com.tn">
            IQ Concept
          </a>
        </div>
        {user?.result ? (
        <Nav>
        
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
          
        </Nav>
        ):( <h4> sign in please</h4>  )}
        
      </div>
    </div>
  );
}

export default Sidebar;
