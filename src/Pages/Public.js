import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import pic from './avatar.jpg';
import Form from '../forms/PublicForm';

function Public() {
    let navigate = useNavigate();

    return (
        <div>
        <Button onClick={() => {navigate("/profile")}} color="white" style={{position: 'absolute' , left: 40, top: 20}}>
          <img src={pic} height={50} width={50} />
        </Button>
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingBottom: "30px", paddingTop: "20px"}}> Public Entry </h1>
        <Form />
        </div>
    )
}

export default Public
