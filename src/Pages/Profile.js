import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import pic from './avatar.jpg';
import Chart from '../components/Happygraph';
import './profile.css';

function Profile(){
    let navigate = useNavigate();

    return(
      <div>
        <div>
        <Button onClick={() => {navigate("/profile")}} color="white" style={{position: 'absolute' , left: 40, top: 20}}>
          <img src={pic} height={50} width={50} />
        </Button>
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingLeft: 20, paddingBottom: "30px", paddingTop: "20px"}}> My Profile </h1>
        </div>
        <div className= 'profile-display' style={{paddingTop: "100px"}}>
        <Chart/>
        </div>
        <div className= 'profile-display' style={{paddingTop: "50px"}}>
         Recent posts 
        </div>
        <div className= 'profile-display' style={{paddingTop: "50px"}}>
         Journal prompts
        </div>
        <div className= 'profile-display' style={{paddingTop: "50px"}}>
         Journal entries 
        </div>
        </div>
    )
}

export default Profile
