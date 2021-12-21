import React from 'react'
import 'https://kit.fontawesome.com/1754c6ffb6.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function icon() {
    return (
        <div>
           <h1>icon page</h1> 
           <FontAwesomeIcon icon={faCoffee} />
        </div>
    )
}

export default icon
