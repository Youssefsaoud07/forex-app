import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

const Join = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const[room,setRoom]=useState('IQ Forex Channel');
    console.log(user?.result.name)
    console.log(room);
    return (

        <div>
            <h1>Join IQ Disscution</h1>
            <Link to={`/chat?name=${user?.result.name}&room=${room}`}>
            <Button className="Button" type ="submit">JOIN NOW!</Button>
            </Link>
        </div>
    )
}

export default Join
