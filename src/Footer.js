import './Footer.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Profile from './Pages/Profile';
import Private from './Pages/Private';
import Globe from './Pages/Globe';
import Public from './Pages/Public';
import { Button, FormGroup, Input, Label } from 'reactstrap';



function Footer() {
let navigate = useNavigate();

  return (
    <div className="footer">
      <nav style={{position: 'absolute' , left: '50%', bottom: 0, transform: 'translate(-50%, -50%)'}}>
        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        Globe
        </Button>
        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        Messages
        </Button>
        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        Entry
        </Button>
        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        Friends
        </Button>
        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        Settings
        </Button>
      </nav>

    </div>
  );
}


export default Footer;