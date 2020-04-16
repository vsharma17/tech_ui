import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")   
   
        let loggedIn = true
        if (token == null) {
          loggedIn = false
        }
        this.state = {
          loggedIn,
          open: true,
          setOpen: true
        }
    }
render (){
    if(this.state.loggedIn === false){
        return <Redirect to ="/Login" />
      }
    return (
        <Grid id="tab-root" item sm={12} lg={8}>
            <Paper style={{marginBottom:"10px"}}>  <Card>
                  <CardContent>
                      <Typography gutterBottom align="center" >
                        Welcome Admin
                      </Typography>
                      <Typography gutterBottom align="center" >
                      <Link to="/Signout">Signout</Link>  
                      </Typography>
                     
                    
                  </CardContent>
                
              </Card></Paper>
        
      
      
        </Grid>
    
    )


}


}