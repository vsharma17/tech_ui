import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SignIn from './SignIn';
import {hostory} from 'react-router-dom' ;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
        
      backgroundColor: theme.palette.background.paper
      
    },
  }));


  export default function Login(props) {
    console.log(props)
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = index => {
      setValue(index);
    };
  
    return (
        <Grid id="tab-root" item sm={12} lg={8}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
          >
            <Tab label="Login as a Technician" {...a11yProps(0)} />
            <Tab label="Login as a Customer" {...a11yProps(1)} />
            
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid item sm={12} lg={12}>
          <Paper>  <Card>
                <CardContent>
                <SignIn history={props.history}/>
                </CardContent>
              
            </Card></Paper>
        </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid item sm={12} lg={12}>
          <Paper >  <Card>
                <CardContent>
                <Typography gutterBottom align="center" variant="h5" component="h2">
                <br /><br /><br /><br /> Coming Soon....<br /><br /><br /><br /><br /><br />
                    </Typography>
               
                </CardContent>
               
            </Card></Paper>
        </Grid>
          </TabPanel>
         
        </SwipeableViews>
      </div>
      </Grid>
    );
  }


/* class Login extends Component {
render () {

    return (
        <div>
            <SignIn />
        </div>
    )
}

}

export default Login; */