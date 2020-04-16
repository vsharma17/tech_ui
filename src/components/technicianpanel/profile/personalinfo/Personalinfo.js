import React, {Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../../../assets/images/21294.png';
import { Input } from '@material-ui/core';
import {DropzoneDialog} from 'material-ui-dropzone';
import axios from 'axios';

import './Personalinfo.css';

const BASE_URL = 'http://localhost:5000/';


export default class Personalinfo extends Component {
constructor(props){
super(props);
this.state = {
  firstName: "Mike",
flag: true,
setFlag: false,
files: [],
open: false,
images: [],
imageUrls: [],
message: '',
source: profile,
}
}

 handleChange = (e) => { 
  this.setState({[e.target.name]:e.target.value});
}


handleChange2(files){
  this.setState({
    files: files
  });
}

handleEditClick(){
  console.log("this")
  this.setState({
    flag : false
  })
  }


handleClick =() => {
    localStorage.formValue = 
      {"email" : "mayank@xavient.com",
        "firstname" : "mayank"
    } 
    
    this.setState({
      flag : true
    })
  }

  handleClose=()=> {
    this.setState({
        open: false
    });
}

handleSave=(files)=> {
    //Saving files to state for further use and closing Modal.   
    console.log(files) 
    console.log(BASE_URL + 'upload')
    const uploaders = files.map(image => {
      const data = new FormData();
      data.append("image", image, image.name);
       //console.log(data.get("image"));
      // Make an AJAX upload request using Axios
      return axios.post(BASE_URL + 'upload', data)
      .then(response => {
      this.setState({
      imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
      });
      })
      });

      // Once all the files are uploaded 
      axios.all(uploaders).then(() => {
      console.log('done');
      }).catch(err => alert(err.message));
    this.setState({
        files: files,
        open: false
        
    });
}

handleOpen=()=> {
    this.setState({ open: true});
}

/* selectImages = (event) => {
  let images = []
  for (var i = 0; i < event.target.files.length; i++) {
  images[i] = event.target.files.item(i);
  }
  images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
  let message = `${images.length} valid image(s) selected`
  this.setState({ images, message })
  }
   
  uploadImages = () => {
  const uploaders = this.state.images.map(image => {
  const data = new FormData();
  data.append("image", image, image.name);
   console.log(data.get("image"));
  // Make an AJAX upload request using Axios
  return axios.post(BASE_URL + 'upload', data)
  .then(response => {
  this.setState({
  imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
  });
  })
  });
   
  // Once all the files are uploaded 
  axios.all(uploaders).then(() => {
  console.log('done');
  }).catch(err => alert(err.message));
  } */
  componentDidMount() {
    axios
      .get(
        'http://localhost:5000/upload/images/1571921186278-21294.png',
        { responseType: 'arraybuffer' },
      )
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ source: "data:;base64," + base64 });
      });
  }

  render () {

  
  return (
  
    <React.Fragment>
       <Button style={{float:'right'}} 
          onClick={() => this.handleEditClick()} 
          variant="contained"
          color="button"> Edit Profile
       </Button>
      <br /><br />
      <Grid container>
      <Grid item xs={3}> 
     {/*  <input className="form-control " type="file" 
onChange={this.selectImages} multiple/>
<p className="text-info">{this.state.message}</p>
<button className="btn btn-primary" value="Upload" 
onClick={this.uploadImages}>Upload</button> */}
{/*   <img src={BASE_URL + url} alt="not available"/> */} 
 <Avatar alt="Mike" id="profileimage" src={this.state.source} style={{ width: '100px', height: '100px' }} /> 
{
  this.state.imageUrls.map((url, i) => (
  <div key={i}>
   <Avatar alt="not available" src={BASE_URL + url} style={{ width: '100px', height: '100px' }} />
  </div>
  ))
  }

           <Button onClick={this.handleOpen} variant="contained"
          color="button">
                  Add/Change Image
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave}
                    acceptedFiles={['.jpg','.svg','.png']}
                    showPreviews={true}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                    maxFileSize={5000000}
                    onClose={this.handleClose}
                    showFileNamesInPreview={true}
                    filesLimit={1}
                />
        
      </Grid>
      
       
      </Grid>
     
      <Typography variant="h6" gutterBottom style={{marginTop:'25px'}}>
        Personal Information
      </Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"           
            value={this.state.firstName}
            onChange={this.handleChange}
            disabled = { this.state.flag  }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField            
            id="middleName"
            name="middleName"
            label="Middle name"
            fullWidth
            autoComplete="mname"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="primaryEmail"
            name="primaryEmail"
            label="Primary Email"
            fullWidth
            autoComplete="pemail"
            type = "email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="secondaryEmail"
            name="secondaryEmail"
            label="Secondary Email"
            fullWidth
            autoComplete="semail"
            type = "email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="primaryPhone"
            name="primaryPhone"
            label="Primary Phone"
            fullWidth
            autoComplete="pphone"
            type = "number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="secondaryPhone"
            name="secondaryPhone"
            label="Secondary Phone"
            fullWidth
            autoComplete="sphone"
            type = "number"
          />
        </Grid>
        
       

        <Grid item xs={12}>
            <Typography variant="h6" style={{marginTop:'25px'}}>       
        Permanent Address
                </Typography>
                </Grid>
        
        <Grid item xs={6}>
          <TextField
            required
            id="housenum"
            name="housenum"
            label="House Number"
            fullWidth
            autoComplete="house number"
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            required
            id="buildingnum"
            name="buildingnum"
            label="Building number"
            fullWidth
            autoComplete="Building number"
          />
          </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="address-line2"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="landmark"
            name="landmark"
            label="Landmark"
            fullWidth
            autoComplete="landmark"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-city"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
          />
        </Grid>

        <Grid item xs={12}>
        <Typography variant="h6" style={{marginTop:'25px'}}>  
          Correspondence Address
     
        
                </Typography></Grid>
        
        <Grid item xs={6}>
          <TextField
            required
            id="housenum"
            name="housenum"
            label="House Number"
            fullWidth
            autoComplete="house number"
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            required
            id="buildingnum"
            name="buildingnum"
            label="Building number"
            fullWidth
            autoComplete="Building number"
          />
          </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="address-line2"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="landmark"
            name="landmark"
            label="Landmark"
            fullWidth
            autoComplete="landmark"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-city"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
          />
        </Grid>
        <Grid item xs={12}>
        <Button  
                    variant="contained"
                    color="secondary"
                    disabled = { this.state.flag  }
                    onClick = {this.handleClick}
                   // onClick={handleSave}
                   // className={classes.button}
                   >
                      Save as draft
                    </Button>
        </Grid>

      {/*   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}

      </Grid>
    </React.Fragment>
  );
}}