import React ,{ useState, useEffect }from "react";
import { useDispatch } from 'react-redux';
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import { getUsers } from '../JS/actions/admin';

import Users from "./users/users";


function Notifications() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);
  
  
  return (
    <>
     <Users setCurrentId={setCurrentId} />
    </>
  );
}

export default Notifications;
