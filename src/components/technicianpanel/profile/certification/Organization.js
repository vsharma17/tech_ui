import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { Input } from '@material-ui/core';
import { withStyles  } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  });

class Organization extends Component {

    constructor(props){
        super(props);
        this.state= {
            organizations : [],
            selectedValue : ""
        }
    }

    handleChange = e => {
        const target = e.target ; 
        const value = target.value ; 
        const name = target.name ;
    
        this.setState({
          [name] : value 
        })
      }

  
   
  render () {
    const {classes} = this.props;  
    return (
      <Grid container spacing={3}  style={{borderBottom: '1px dotted #EEE', paddingBottom:'25px'}} >
      <Grid item xs={12} md={6}>
        <TextField required id="organization" label="Organization Name" fullWidth />
      </Grid>
      <Grid item xs={12} md={6} style={{marginTop:'16px'}}>
        <Select native value={this.state.select}
                name="technologySelect" 
                onChange={e => this.handleChange(e)} 
                fullWidth
            >
            <option value="none" >
                 Technology
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select> 
      </Grid>
      <Grid item xs={12} md={3}>
      <TextField
      fullWidth
        id="startdate"
        label="Start Date"
        type="date"    
        InputLabelProps={{
            shrink: true,
      }}
    />
      </Grid>
      <Grid item xs={12} md={3}>
      <TextField
      fullWidth
        id="enddate"
        label="End Date"
        type="date"    
        InputLabelProps={{
            shrink: true,
        }}
    />   
      </Grid>

      <Grid item xs={6}  style={{marginTop:'16px'}}>
       Upload Certificate 
        <Input type="file" style={{marginLeft:'10px'}}  />
                </Grid>

            {/* <Grid item xs={12}>
                <Fab size="small" color="secondary" aria-label="add" className={classes.fab}>
                    <AddIcon />
                </Fab></Grid> */}
    </Grid>
      )
  }}

  export default withStyles(styles)(Organization);

