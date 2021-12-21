import React from 'react'
import pic from './avatar.jpg';
import {useNavigate} from 'react-router-dom'

function Profile(){
    let navigate = useNavigate();

    return(
        <div>
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingBottom: "30px", paddingTop: "20px"}}> My Profile </h1>
        <img src={pic} height={50} width={50} style={{position: 'absolute' , left: 40, top: 20}} />
        <button onClick={() => {navigate("/")}}>Go to globe page</button>
        </div>
    )
}

export default Profile
