import React from 'react'
import pic from './avatar.jpg';
//import Graph from './Linegraph.js';
import { useNavigate } from 'react-router-dom';

function Privateentry(){
    return(
        <div>
           <Button onClick= {this.Page} color="white" style={{position: 'absolute' , left: 40, top: 20}}> <img src={pic} height={50} width={50} /></Button>
         <h1 style={{paddingBottom: "30px", paddingTop: "20px"}}>Private Entry</h1>
       
        {/*<h1 style={{position: 'absolute' , left: 100, top: 0, paddingBottom: "30px", paddingTop: "20px"}}> </h1>*/}
        </div>
    )
}

export default Privateentry;
