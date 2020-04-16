import React, { Component } from "react";
import logo from '../../../assets/images/logo.svg';
import './Topnavigation.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { stat } from "fs";





class Topnavigation extends Component {  

    
   constructor(props) {
        super(props);   
     
      
       /*  this.state = {
            loggedIn: ''
        }   */  
       // debugger; 
    //  console.log(this.state.loggedIn);

        //this.loggedIn = this.loggedIn.bind(this)
    } 
 // <Link to="/Login" >Login/Regsiter</Link>  
   /*  logeclickLogoutdin = () => {
        const token = localStorage.getItem("token")   
   
        console.log(token)
        if (token) {
            return <Link to="/Signout" >Logout</Link>

        }
        else {
            return <Link to="/Login" >Login/Regsiter</Link>
        }
    }  */

    render() {
       // console.log(this.state.loggedIn);
       // const { isAuthenticated } = this.props.auth;

        const guestLinks = (
            <Link to="/Login" loginlogoutlink={this.setState}>
                Login/Regsiter</Link>
        )

        const userLinks = (
            <Link to="/Signout" >Logout</Link>
        ) 

        return (
            <div>
                <header className="App-header">
                    <div className="logo-wrapper"><Link to="/"><img src={logo} className="App-logo" alt="Dish - GIG Economy" /></Link> <Link to="/" ><span className="logo-text"> | GIG Economy</span></Link>
                    </div>
                    <div className="topnav" id="topnav" onClick={this.handleChane}>
                        <ul>
                            <li>
                           <Link to="/Login" >Login/Regsiter</Link>  
    {/* <Button color="light" onClick={() => this.props.clickLogout()}>
    {this.props.loggedIn? 'Logout' : 'Login'}
</Button> */}

   
                     {/*  {isAuthenticated ? userLinks : guestLinks}  */} 
                               {/*  {this.logedin()} */}
                                {/*  <Link to="/Login" onClick={this.clickLogout()}>
                       {this.props.loggedIn? 'Logout' : 'Login/Regsiter'}
                       
                       </Link> */}
                            </li>
                        </ul>
                    </div>
                </header>

            </div>
        );
    }

}

/*      Topnavigation.propTypes = {
    auth: React.PropTypes.object.isRequired
}   */

/*  function mapStateToProps(state) {
    return {auth: state.auth}
}   */
 
//export default connect(mapStateToProps)(Topnavigation); 
export default Topnavigation;