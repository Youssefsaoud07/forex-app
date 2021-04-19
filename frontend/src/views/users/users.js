import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import  User  from "./user/user";


const Users = () => {
    const users = useSelector((state) => state.adminReducer);
    console.log('users',users.length)
 
    return (
        
            
    !users.length ? <CircularProgress /> : (
      <Grid  container alignItems="stretch" spacing={3}>
        {users.map((user) => (
          <Grid key={user._id} item xs={12} sm={6} md={6}>
            <User user={user}   />
          </Grid>
        ))}
      </Grid>
    )
  );
};
        
    
export default Users
