import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Skills() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
      Primary Skills:  <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />

        </Grid>
        <Grid item xs={12} sm={6}>
      Secondary Skills:  <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />

        </Grid>   
      </Grid>
    </React.Fragment>
  );
}