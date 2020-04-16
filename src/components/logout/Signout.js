import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default class Signout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token")  
      }
render (){

    return (
        <Grid id="tab-root" item sm={12} lg={8}>
            <Paper style={{marginBottom:"10px"}}>  <Card>
                  <CardContent>
                      <Typography gutterBottom align="center" >
                      You have been successfully Signout!!!
                      </Typography>
                      <Typography gutterBottom align="center" >
                      <Link to="/Login">Login again</Link>  
                      </Typography>
                     
                    
                  </CardContent>
                
              </Card></Paper>
        
      
      
        </Grid>
    
    )


}


}