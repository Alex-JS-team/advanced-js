import React, {useState} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
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



  const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sam",
      age: 33
    },
    {
      id: 1.1,
      name: "Sam",
      age: 56
    },
    {
      id: 2,
      name: "Pete",
      age: 22
    },
    {
      id: 3,
      name: "David",
      age: 44
    },
    {
      id: 5,
      name: "Ashley",
      age: 22
    },
    {
      id: 6,
      name: "Nancy",
      age: 33
    },
    {
      id: 7,
      name: "Vivien",
      age: 44
    }
  ] )
  const [usersToRender, setUsersToRender] = useState([
    {
      id: 1,
      name: "Sam",
      age: 33
    },
    {
      id: 1.1,
      name: "Sam",
      age: 56
    },
    {
      id: 2,
      name: "Pete",
      age: 22
    },
    {
      id: 3,
      name: "David",
      age: 44
    },
    {
      id: 5,
      name: "Ashley",
      age: 22
    },
    {
      id: 6,
      name: "Nancy",
      age: 33
    },
    {
      id: 7,
      name: "Vivien",
      age: 44
    }
  ] )
  const classes = useStyles(); 
    return (
<div className={classes.root}>
<Grid container spacing={3}>
  <Grid item xs={12}>
    <Paper className={classes.paper}>Header
      <Header title="It's a header"/>
    </Paper>
  </Grid>
  <Grid item xs={12}>
    <Paper className={classes.paper}>Content
      <Content users={users} setUsersToRender={setUsersToRender} usersToRender={usersToRender}/>
    </Paper>
  </Grid>
  <Grid item xs={12}>
    <Paper className={classes.paper}>Content
      <Footer copyrights="It's a footer"/>
    </Paper>
  </Grid>
</Grid>
</div>
    )
}

export default App