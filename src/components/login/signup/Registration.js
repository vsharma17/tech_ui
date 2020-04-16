import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Registration.css';
import Checkbox from '@material-ui/core/Checkbox';




class Registration extends Component {
constructor (){
  super();
  this.state = {   
    isDisabled: true,
    checked: true    
  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange = () => {
  this.setState({checked: !this.state.checked});
  this.setState({isDisabled: !this.state.checked});  
  }

  handleSubmit = (e) => {
e.preventDefault();
if (this.state.isDisabled===false) {
  //alert('Form submitted')
  this.props.history.push('/Signup');
  
 } else
 {
  alert('form has not submitted');
 }
  }


render (){

  return (
    <Grid id="tab-root" item sm={12} lg={8}>
 
  <form  onSubmit={this.handleSubmit}>  
      <Grid item sm={12} lg={12}>
      <Paper >  <Card>
            <CardContent>
                <Typography gutterBottom align="center" variant="h5" component="h2">
                Technician Terms & Conditions
                </Typography>
                <div className="cardcontent">
                <Typography paragraph color="textSecondary">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Typography>
                <Typography paragraph color="textSecondary">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Typography>
                <Typography paragraph color="textSecondary">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Typography>
                <Typography paragraph color="textSecondary">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Typography>
                <Typography paragraph color="textSecondary">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Typography>
                </div>
            </CardContent>
            <CardActions>
            <Checkbox  name="custchkbox" id="chkBoxTerms" onChange={this.handleChange}/> 
<Button variant="contained" name="custbtn" id="custbtn" 
disabled={this.state.isDisabled}  type="submit"  color="secondary">
                    Accecpeted
                </Button> 
            </CardActions>
        </Card></Paper>
    </Grid>
    </form> 

  </Grid>
     
);
}

}


export default Registration;


