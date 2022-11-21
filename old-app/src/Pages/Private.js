import React, { Component } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import pic from './avatar.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faVideo, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import DateTime from '../components/Datetime';

const useState = React.useState

function Form(props){

const[name, setName] = useState()
const[text, setText] = useState()

function handleSubmit(e){
    e.preventDefault()
    props.setEntry(prev => prev.concat({name, text, id: Date.now()}))
    setName("")
    setText("")
    alert("Saved!")
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <FormGroup style={{position: 'absolute' , left: 30, top: 105 }}>
            <DateTime/>
            <Label style={{position: 'relative' , left: 0, top: 20, paddingTop: "30px", paddingBottom: "30px"}}>
          What's something you appreciate most about yourself?
            </Label>
          </FormGroup>
          <FormGroup style={{position: 'absolute' , left: 30, top: 150, paddingTop: "10px", paddingBottom: "30px"}}>
            <input 
            value={name}
            onChange= {e => setName(e.target.value)}
            placeholder="Title" />
        </FormGroup>
        <FormGroup style={{position: 'fixed' , left: 30, top: 200}}>
            <input style={{paddingTop: "10px", paddingBottom: "370px", paddingRight: 300}}
            value={text}
            onChange= {e => setText(e.target.value)}
            placeholder="What's on your mind?" />

            <button style={{position: 'fixed', left: '30%', bottom: 100}}>Save Journal</button>
          </FormGroup>
        </form>
        </div>
      )
    }

    function Entry(props) {
        return <li style={{position: 'absolute' , right: 100, top: 30}}>{props.name} Entry: {props.text} </li>
      }
      
function Privateentry(){
    let navigate = useNavigate();

    const [entry, setEntry] = useState([
      ])

    return(
        <div>
        <Button onClick={() => {navigate("/profile")}} color="white" style={{position: 'absolute' , left: 40, top: 20}}>
        <img src={pic} height={50} width={50} />
        </Button>
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingLeft: 20, paddingBottom: "30px", paddingTop: "20px"}}> Private Entry </h1>
        <Form setEntry={setEntry}/>
        <ul>
        {entry.map(entry => <Entry name={entry.name} text= {entry.text} key={entry.id} />)}
      </ul>
        </div>
    )
}


export default Privateentry;
