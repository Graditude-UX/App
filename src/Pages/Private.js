import React, { Component } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
//import Graph from './Linegraph.js';
import pic from './avatar.jpg';
import { useNavigate } from 'react-router-dom';
import Form from '../forms/JournalForm.js';

function Privateentry(){
    let navigate = useNavigate();

    return(
        <div>
        <Button onClick={() => {navigate("/profile")}} color="white" style={{position: 'absolute' , left: 40, top: 20}}>
        <img src={pic} height={50} width={50} />
        </Button>
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingLeft: 20, paddingBottom: "30px", paddingTop: "20px"}}> Private Entry </h1>
        <Form className="App container" />
        </div>
    )
}


export default Privateentry;
