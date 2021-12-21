import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMessage, faPencil, faUserFriends, faGear } from "@fortawesome/free-solid-svg-icons";
import './popup.css';

const useState = React.useState

function Entrybar(props){
    let navigate = useNavigate();
    const [buttonPopup, setButtonPopup] = useState(false);

    return( props.trigger) ? (
  <div style={{position: 'fixed' , left: '50%', bottom: 20, transform: 'translate(-50%, -50%)'}} className="popup">
      <div>
        <Button onClick={() => {navigate("/public")}} color="white" style={{}}>
        Public entry
        </Button>
      </div>
        <Button onClick={() => {navigate("/private")}} color="white" style={{}}>
        Private Entry
        </Button>
      <div>
        {props.children}
      </div>
  </div>): "";
}

export default Entrybar;