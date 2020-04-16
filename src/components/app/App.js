import React, {Component} from 'react';
import { BrowserRouter,Route, Switch  } from "react-router-dom";
//import './App.css';
import Topnavigation from '../common/header/Topnavigation';
import Signup from '../login/signup/Signup';
import Login from '../login/signin/Login';
import Registration from '../login/signup/Registration';
import Forgotpassword from '../login/forgetpassword/Forgotpassword';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import Changepassword from '../login/changepassword/Changepassword';
import Techniciandashboard from '../technicianpanel/dashboard/Techniciandashboard';
import Personalinfo from '../technicianpanel/profile/personalinfo/Personalinfo';
import Profile from '../technicianpanel/profile/Profile';
import Qualifications from '../technicianpanel/profile/qualification/Qualifications';
import Certification from '../technicianpanel/profile/certification/Certification';
import Signout from '../logout/Signout';
import Dashboard from '../technicianpanel/dashboard/Dashboard';
import Chart from '../technicianpanel/dashboard/Chart';
import SignIn from '../login/signin//SignIn';
import Admin from '../Admin';
import { Link } from 'react-router-dom';
import Loginpage from '../login/signin/Loginpage';



/* import Dashboard from './TechnicianDashboard/Dashboard';
import Dashboard from './TechnicianDashboard/Dashboard';
import Dashboard from './TechnicianDashboard/Dashboard'; */

class App extends Component {
  constructor(props) {
    super(props);        
    this.state = {
      token: ''  
    } 

   // this.loggedIn = this.loggedIn.bind(this)
}

clickLogOut = () => {
 const token = localStorage.getItem("token")   
const loginlink = <Link to="/Login" >Login</Link>;
const logoutlink = <Link to="/Signout" >Logout</Link>;
 // console.log(token)
 /* if (token) {
  return <Link to="/Signout" >Logout</Link>

}
else {
  return <Link to="/Login" >Login/Regsiter</Link>
} */
  /* if (loggedIn == true) {
      return ( this.setState({}));

  }
  else {
      return (this.setState({}));
  } */
}

  render() {
  return (
    <div className="App"> 
     <BrowserRouter>
      {/*   <Provider store={store}>
          <Topnavigation />
        </Provider> */}
     <Topnavigation />

          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/registration" component={Registration} />
          <Route path="/forgotpassword" component={Forgotpassword} />   
          <Route path="/changepassword" component={Changepassword}  />  
          <Route path="/adminpanel" component={Techniciandashboard}  />   
          <Route path="/profile" component={Personalinfo}  /> 
          <Route path="/profile" component={Profile}  /> 
          <Route path="/profile" component={Qualifications}  /> 
          <Route path="/profile" component={Certification}  /> 
          <Route path="/dashboard" component={Dashboard}  /> 
          <Route path="/chart" component={Chart}  /> 
          <Route path="/signout" component={Signout}  /> 
          <Route path="/admin" component={Admin}  /> 
          <Route path="/loginpage" component={Loginpage} />
          </Switch>
          <Footer />
        </BrowserRouter> 

  
    </div>
  );
}
}

export default App;
