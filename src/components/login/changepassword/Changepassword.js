import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Changepassword.css';


class Changepassword extends Component {

  render() {
  
    return (
 
         
         
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style= {{textAlign:"center"}}>
          Change Password
          </Typography>
          <form Validate>
            <Grid container spacing={2}> 
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </Grid>              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="oldpassword"
                  label="Old password"
                  type="password"
                  id="oldpassword"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="newpassword"
                  label="New password"
                  type="password"
                  id="newpassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="confirm-password"
                />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
             style={{marginTop:"20px"}}
            >
              Submit
            </Button>
           
          </form>
        </div>
    
      </Container>
  
    );
  }
}

export default Changepassword;
