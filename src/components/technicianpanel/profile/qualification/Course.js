import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';





class Course extends Component {  
   
  render () {
    const {classes} = this.props;  
    return ( <Grid container spacing={3} style={{borderTop:'1px solid #eee', marginTop:'35px'}} >
        <Grid item xs={12} md={2}>
        <TextField required id="ualificationname" label="Qualfication Name" fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField required id="institutename" label="Institute Name" fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField required id="universityname" label="University Name" fullWidth />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField required id="score" label="Score" fullWidth />
      </Grid>
      <Grid item xs={12} md={2}>
      <TextField required id="yearofqualification" type="number"  label="Year" fullWidth />
       
    
      </Grid>
      <Grid item xs={12} md={6}>
    Upload Document <Input type="file" />
      </Grid>
      </Grid>
      )
  }}

  export default Course;

