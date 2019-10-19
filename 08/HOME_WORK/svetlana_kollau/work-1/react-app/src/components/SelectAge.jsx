import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
})); 

const SelectAge = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
    console.log(event.target.value)
    props.setUsersToRender(props.users.filter((user)=> user.age === event.target.value))
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

    return (
      <form autoComplete="off">
      
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>Age</em>
          </MenuItem>
          {Array.from(new Set(props.users.map((user) => user.age))).map((age) => <MenuItem value={age}>{age}</MenuItem>)}
          {/* <MenuItem value={22}>22</MenuItem>
          <MenuItem value={33}>33</MenuItem>
          <MenuItem value={44}>44</MenuItem> */}
        </Select>
      </FormControl>
    </form>
    )
 
}

export default SelectAge
