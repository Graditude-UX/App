import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import pic from './avatar.jpg';

function MyMessages(){
    let navigate = useNavigate();

    return(
      <div>
        <div>
        <Button onClick={() => {navigate("/messages")}} color="white" style={{position: 'absolute' , left: 40, top: 20}}>
          <img src={pic} height={50} width={50} />
        </Button>
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingLeft: 20, paddingBottom: "30px", paddingTop: "20px"}}> My Messages</h1>
        </div>

        </div>
    )
}

export default MyMessages
