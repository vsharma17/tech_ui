import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Tickets() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Resolved Tickets</Title>
      <Typography component="p" variant="h4">
        1024
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 20 Oct, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View all Tickets
        </Link>
      </div>
    </React.Fragment>
  );
}