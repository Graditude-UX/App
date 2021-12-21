import React, { Component } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

class Form extends Component{
    constructor(props){
        super(props)

        this.initialState = {
            title:'',
            body: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    render() {
        const {title, body} = this.state;
        
        return (
            <div >
            <form>
                <FormGroup style={{position: 'absolute' , left: 40, top: 90 }}>
                <small style= {{}}>{Date()}</small>
                <h3></h3>
                <Label>
                    What's are you grateful for today?
                </Label>
                </FormGroup>

                <FormGroup style={{position: 'absolute' , left: 30, top: 150, paddingTop: "10px", paddingBottom: "30px"}}>
                <Input
                     className = "block"
                     placeholder="Add title"
                     type="text"
                     name ="title"
                     id="title"
                     value={title}
                     onChange={this.handleChange} />
                </FormGroup>
                
                <FormGroup style={{position: 'relative' , left: '50%', transform: 'translate(-50%, -50%)'}}>
                <Input style={{position: 'absolute' , left: 30, top: 200, paddingTop: "10px", paddingBottom: "370px"}}
                     className = "block"
                     placeholder="What do you want to tell the world?"
                     type="text"
                     name ="body"
                     id="body"
                     value={body}
                     onChange={this.handleChange} /> 
                     <Button color= "white" style={{position: 'absolute' , left: 50, top: 560}}> <FontAwesomeIcon icon={faImages} /> </Button>
                </FormGroup>
            </form>
            <Button color = "info"  style={{position: 'absolute' , left: '50%', bottom: 60, transform: 'translate(-50%, -50%)'}} onClick={this.submitForm} >Save Journal</Button>
            </div>
        )
    }
}

export default Form;