import React from 'react'
import pic from './avatar.jpg';
//import Graph from './Linegraph.js';
import { useNavigate } from 'react-router-dom';

function Privateentry(){
    return(
        <div>
       
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingBottom: "30px", paddingTop: "20px"}}> 
        <li><a href='/'> Private Entry </a>
        </li>     
      
         </h1>
        <img src={pic} height={50} width={50} style={{position: 'absolute' , left: 40, top: 20}} />
        </div>
    )
}

export default Privateentry;
