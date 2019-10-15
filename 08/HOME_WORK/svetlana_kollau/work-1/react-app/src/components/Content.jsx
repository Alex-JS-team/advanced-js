import React from 'react'
import UserList from './UserList'
import SelectAge from './SelectAge'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Content = (props) =>{
  const classes = useStyles();
  return (
  
<div className={classes.root}>
<Grid container spacing={3}>
  <Grid item xs={6}>
    <Paper className={classes.paper}>Users
      <UserList users={props.usersToRender}/>
    </Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper className={classes.paper}>Select age please
    <SelectAge users={props.users} setUsersToRender={props.setUsersToRender}/>
    </Paper>
  </Grid>
</Grid>
</div>
    )
  
}

export default Content
