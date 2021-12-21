import React, { Component } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faVideo, faImages, faMicrophone } from '@fortawesome/free-solid-svg-icons';

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
            <div>
            <form>
                <FormGroup>
                <small style= {{}}>{Date()}</small>
                <h3></h3>
                <Label>
                   <span className="font-weight-bold"> What's something you appreciate most about yourself?</span>
                </Label>
                <Input
                     placeholder="Add title"
                     type="text"
                     name ="title"
                     id="title"
                     value={title}
                     onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                <Label>  </Label>
                <Input style={{paddingTop: "10px", paddingBottom: "400px" }}
                     placeholder="What's on your mind today?"
                     type="text"
                     name ="body"
                     id="body"
                     value={body}
                     
                     onChange={this.handleChange} /> 
                     {/* <Button color= "white" style={{position: 'absolute' , left: 130, bottom: 90}}> <FontAwesomeIcon icon={ faImages } /> </Button>
                     <Button color= "white"  style={{position: 'absolute' , right: 132, bottom: 90}}> <FontAwesomeIcon icon={ faVideo } /> </Button>
                     <Button color= "white"  style={{position: 'absolute' , right: 135, bottom: 130}}><FontAwesomeIcon icon={ faMicrophone }/> </Button> */}
                </FormGroup>
            </form>
            <Button color = "info" onClick={this.submitForm} size="lg" block>Save Journal</Button>
            </div>
        )
    }
}

export default Form;