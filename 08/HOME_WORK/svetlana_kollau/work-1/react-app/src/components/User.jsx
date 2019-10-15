import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const User = (props) => { 
  console.log(props.name)
    return (
      <Card >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Name: {props.name},  age: {props.age} y.o.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default User
