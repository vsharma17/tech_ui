import React, {Component} from 'react';
import Axios from 'axios';


class Loginform extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        Axios.post('/api/users', {user: this.state});
      //  console.log(this.state)
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label className="control-label">Username</label>
                  <input 
                  value={this.state.username}
                  onChange={this.onChange}
                  type="text"
                  name="username"
                  className="form-control"
                  />                  
                  </div> 
                  <div className="form-group">
                  <label className="control-label">Email</label>
                  <input 
                  value={this.state.email}
                  onChange={this.onChange}
                  type="email"
                  name="email"
                  className="form-control"
                  />                  
                  </div> 

                  <div className="form-group">
                  <label className="control-label">Password</label>
                  <input 
                  value={this.state.password}
                  onChange={this.onChange}
                  type="password"
                  name="password"
                  className="form-control"
                  />                  
                  </div> 

                  <div className="form-group">
                  <label className="control-label">Password Confirmation</label>
                  <input 
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  type="password"
                  name="passwordConfirmation"
                  className="form-control"
                  />                  
                  </div> 

                  <div className="form-group">
                      <button className="btn btn-primary">Sign up</button>
                      </div>  

            </form>
        )
    }
}

export default Loginform;