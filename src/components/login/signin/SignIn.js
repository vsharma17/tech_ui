import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles  } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, history } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { returnStatement } from '@babel/types';
//import {Authactions} from '../../actions/Authactions'
import {checkauth} from '../../../actions/index'
import { connect } from "react-redux";



const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

function mapDispatchToProps(dispatch){
  return {
    checkauth: auth => dispatch(checkauth(auth))
  };

}

class SignIn extends Component {
  constructor(props) {
    super(props); 
    //const token = localStorage.getItem("token") 
   
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      token: ''
    }
     /* if (token == null) {
      loggedIn = false
    }  */ 
  }

  componentDidMount(){ 
   

   //  this.setState({loggedIn:true})

 
    //
 /*    this.setState({loggedIn:true})
    console.log(loggedIn);   */
  }

  componentWillMountMount(){ 
    
     this.setState({loggedIn:false})

   
    //
 /*    this.setState({loggedIn:true})
    console.log(loggedIn);   */
  }
handlechange = (e) => {
  this.setState({[e.target.name]:e.target.value});
}

handlesubmit = (e) => {
  e.preventDefault();
  const {email,password} = this.state;
  const {auth} = this.state;
  this.props.checkauth({auth});
  this.setState({auth: ""});
  if(email === "mayank@gmail.com" && password === "1@34567b"){ 
    localStorage.setItem("token","fdsffdsfdsafdsaf")
    this.setState({loggedIn: true})
    console.log(JSON.stringify('username is ' + this.state.email + '  and password is' + this.state.password));
   // this.props.history.push('/TechnicianDashboard/Techniciandashboard');
  }

  else   
  {
   alert('User is not exist or password mismatch');
  }
}

  render () {  
  //console.log(this.props)
  const {classes} = this.props; 
  const {auth} = this.state; 
  console.log({auth});


  
if(this.state.loggedIn){
return <Redirect to ="/adminpanel" />
// <Redirect to ="/TechnicianDashboard/Techniciandashboard" />
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div /* className={classes.paper} */>
        <Avatar /* className={classes.avatar} */>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Technician Sign in
        </Typography>
        <form /* className={classes.form} */  onSubmit={this.handlesubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            onChange={this.handlechange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handlechange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"

          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           /*  className={classes.submit} */

          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/Forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/Registration" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
 
    </Container>
  );
}
}

const Signin = connect(null, mapDispatchToProps)(SignIn)

export default Signin;
