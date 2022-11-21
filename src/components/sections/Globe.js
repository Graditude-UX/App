import React from 'react'
// import {useNavigate} from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import pic from '../../assets/images/avatar.jpg';
import { useLocation, Switch } from 'react-router-dom';

import AppRoute from '../../utils/AppRoute';

// Layouts
import LayoutDefault from '../../layouts/LayoutDefault';

// Views 
import Home from '../../views/Home';

function Globe() {
    //let navigate = useNavigate();

    return (
        <div>
         <Button onClick={() => <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>} color="white" style={{position: 'absolute' , left: 40, top: 20}}>
          <img src={pic} height={50} width={50} />
        </Button>
        <h1 style={{position: 'absolute' , left: 100, top: 0, paddingLeft: 20, paddingBottom: "30px", paddingTop: "20px"}}> Globe Page </h1>
        </div>
    )
}

export default Globe