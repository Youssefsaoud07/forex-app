
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar } from '@material-ui/core';
import { useLocation,useHistory, Link , NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import * as actionType from '../../JS/constants/actionsTypes';
import useStyles from './Styles';
import decode from 'jwt-decode';
import Modal from 'react-modal';

import routes from "routes.js";
import Authen from "views/Auth/Auth";

function Header() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      console.log("user",decodedToken)

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  
  
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };
 

 
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          
        </div>
        
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="nav mr-auto" navbar>
            
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <i className="nc-icon nc-planet"></i>
                <span className="notification">5</span>
                <span className="d-lg-none ml-1">Notification</span>
              </Dropdown.Toggle>
             
            </Dropdown>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="nc-icon nc-zoom-split"></i>
                <span className="d-lg-block"> Search</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <>
          <Button onClick = { () => setmodalIsOpen(true)} variant="contained" color="primary">Sign In</Button> 
          <Modal isOpen = {modalIsOpen} >
            <Authen />
          </Modal>
          </>
        )}
      </Toolbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
