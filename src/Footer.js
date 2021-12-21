import './Footer.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Private from './Pages/Private';
import Globe from './Pages/Globe';
import Public from './Pages/Public';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMessage, faPencil, faUserFriends, faGear } from "@fortawesome/free-solid-svg-icons";
import Entrybar from './components/Popup';


function Footer() {
let navigate = useNavigate();
const [popUpMenu, setPopUpMenu] = React.useState(false);

  return (
    <div className="footer">
      <nav style={{position: 'absolute' , left: '50%', bottom: 0, transform: 'translate(-50%, -50%)'}}>
        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        <FontAwesomeIcon icon={faGlobe} />
        </Button>

        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        <FontAwesomeIcon icon={faMessage} />
        </Button>

        <Button onClick={() => {setPopUpMenu(!popUpMenu)}} color="white" style={{}}>
        <FontAwesomeIcon icon={faPencil} />
        </Button>

        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        <FontAwesomeIcon icon={faUserFriends} />
        </Button>

        <Button onClick={() => {navigate("/")}} color="white" style={{}}>
        <FontAwesomeIcon icon={faGear} />
        </Button>
      </nav>

    </div>
  );
}


export default Footer;