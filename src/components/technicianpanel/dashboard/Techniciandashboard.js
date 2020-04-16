import React, {Component} from 'react';
import Leftpanel from '../leftpanel/Leftpanel';
import {Redirect} from 'react-router-dom';

class Techniciandashboard extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")   
   
        let loggedIn = true
        if (token == null) {
          loggedIn = false
        }
        this.state = {
          loggedIn:true,
          open: true,
          setOpen: true
        }
      }

render (){
    if(this.state.loggedIn === false){
        return <Redirect to ="/Login" />
      }
    
    return (
        <div style={{marginTop:"50px"}}>
<Leftpanel  />
</div>
    )
}

}

export default Techniciandashboard;