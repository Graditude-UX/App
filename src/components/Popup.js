import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMessage, faPencil, faUserFriends, faGear } from "@fortawesome/free-solid-svg-icons";

function Entrybar(){
    let navigate = useNavigate();


    return(
  <div>
      <div>
        <Button onClick={() => {navigate("/public")}} color="white" style={{}}>
        Public entry
        </Button>
      </div>
        <Button onClick={() => {navigate("/private")}} color="white" style={{}}>
        Private Entry
        </Button>
      <div>

      </div>
  </div>)
}

export default Entrybar;