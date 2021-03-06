import React from 'react';
import {Card, CardActions, Grid, Cell, Button} from 'react-mdl';

const CreditsMenu = (props) =>{
  const credits_array = [{argument: 1, variable: "Less than 3"}, {argument: 3, variable: "3 credits"}, {argument: 4, variable: "4 credits"}]

  const credits_buttons = credits_array.map((element) =>
    <Cell
      phone={6}
      tablet={4}
      col={4}>
        <Button
          style={{width: '100%'}}
          raised
          onClick={() => props.handleClick(element.argument)}>
            {element.variable}
        </Button>
    </Cell>
  )

  return(
    <Card shadow={0} style={props.style}>
      <h4>Your Class Credits</h4>
      <CardActions border>
        <Grid>
          {credits_buttons }
        </Grid>
      </CardActions>
    </Card>
  )
}

export default CreditsMenu;
