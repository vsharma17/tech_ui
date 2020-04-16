import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Organization from './Organization';
import { withStyles } from "@material-ui/core/styles";
import { Input } from '@material-ui/core';



const Uploadfile = (props) => {
//console.log(props)
  return (
    <Grid item xs={6}  style={{marginTop:'16px'}}>
       Upload Certificate 
        <Input type="file" style={{marginLeft:'10px'}}  />
                </Grid>
  )
}
 /*const Organization = (props) => {
   console.log(props)
  return (
    <Grid container spacing={3} style={{ borderTop: '1px solid #EEE', paddingTop:'25px'}}>
    <Grid item xs={12} md={6}>
      <TextField required id="organization" label="Organization Name" fullWidth />
    </Grid>
    <Grid item xs={12} md={6}>
      <Select onChange={ props.handleChange}  name="select">
          <option value={props.state.select} disabled>
          Technology
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Select> 
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField
    id="startdate"
    label="Start Date"
    type="date"    
    InputLabelProps={{
      shrink: true,
    }}
  />
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField
    id="enddate"
    label="End Date"
    type="date"    
    InputLabelProps={{
      shrink: true,
    }}
  />
     
 
    </Grid>
  </Grid>
    )
}
 */

export default class Certification extends Component {
  constructor(){
    super();
    this.state = {
      organizations: [],
      uploadfiles:[]
     // select: ''
    }     
  }; 

  // handleChange = e => {
  //   const target = e.target ; 
  //   const value = target.value ; 
  //   const name = target.name ;

  //   this.setState({
  //     [name] : value 
  //   })
  // }
  
  addOrganization = () => {
    this.setState({
      organizations: [...this.state.organizations, <Organization  /> ]
    })
  }
  addUploadfile = () => {
    this.setState({
      uploadfiles: [...this.state.uploadfiles, <Uploadfile  /> ]
    })
  }

  render() {  
   // console.log(this.state)
  return (
    <>     
    <Grid item xs={12}><Typography variant="h6" >       
        Drug Test Report 
                </Typography></Grid>
      <Grid item xs={12} style={{marginBottom:'35px'}}>   
        <Input type="file"  fullWidth />
               </Grid>
      <Typography variant="h6" gutterBottom>
      Professional Experience
      </Typography>
      
     <Organization />
     <Grid item xs={12} md={12}>
   
    <div style={{ marginTop:'35px'}} > 
    {this.state.organizations}</div>
  
    {this.state.uploadfiles}
  <Button onClick={this.addOrganization} variant="contained" color="button" style={{marginTop:'25px'}}>Add Organization</Button>
       
  <Button onClick={this.addUploadfile} variant="contained" color="button" style={{marginTop:'25px', marginLeft:'15px'}}>Add more certificate</Button>
       </Grid>
   
    </>
  );
}
}
