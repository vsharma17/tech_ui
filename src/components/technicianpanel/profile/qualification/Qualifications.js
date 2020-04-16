import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Organization from '../certification/Organization';
import { withStyles } from "@material-ui/core/styles";
import { Input } from '@material-ui/core';
import Course from './Course';



 

export default class Qualifications extends Component {
  constructor(){
    super();
    this.state = {
      courses: []      
    }    
  }; 


  
  addCourse = () => {
    this.setState({
      courses: [...this.state.courses, <Course  /> ]
    })
  }
  

  render() {  
  return (
    <>    <Typography variant="h6" gutterBottom>
    Educational and Professional Qualifications
    </Typography> 

      
     
     
     
   
 <Course /> 
     <Grid item xs={12} md={12}>
   
    <div style={{ marginTop:'35px'}} > 
    {this.state.courses}</div>
  
  
  <Button onClick={this.addCourse} variant="contained" color="button" style={{marginTop:'25px'}}>Add more Course</Button>
       
  {/* <Button onClick={this.addUploadfile} variant="contained" color="button" style={{marginTop:'25px', marginLeft:'15px'}}>Add more certificate</Button> */}
       </Grid>
    
    </>
  );
}
}
