import React from 'react'
import {  CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../JS/actions/admin';
import {
    Badge,
    
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
const User = ({ user}) => {
    const dispatch = useDispatch();
    // const user = JSON.parse(localStorage.getItem('profile'));


    return (
        <Col md="14">
        <Card className="card-user">
          <div className="card-image">
            <img
              alt="..."
              src={
                require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                  .default
              }
            ></img>
          </div>
          <Card.Body>
            <div className="author">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={user.imageUrl}
                ></img>
                <h5 className="title">{user.name}</h5>
              </a>
              <p className="description">{user.profession}</p>
            </div>
            <p className="description text-center">
            {user.email} <br></br>
            {user.solde} <br></br>
            {user.enterprise}
            </p>
            <Button size="small" color="secondary" onClick={() => dispatch(deleteUser(user._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
          </Card.Body>
          
        </Card>
      </Col>
    )
}

export default User
