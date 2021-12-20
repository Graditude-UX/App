import React from 'react'
import {useNavigate} from 'react-router-dom'

function Profile() {
    let navigate = useNavigate();

    return (
        <div>
            Profile Page
            <button onClick={() => {navigate("/")}}>Go to globe page</button>
        </div>
    )
}

export default Profile
