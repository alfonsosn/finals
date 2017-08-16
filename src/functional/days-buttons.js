import React from 'react';
import {Card, CardActions, Grid, Cell, Button} from 'react-mdl';

const DaysButtons = (props) => {
  const days_array = props.args;

  const days_buttons = days_array.map((day) =>
    <Cell
      phone={2}
      tablet={2}
      col={3}>
        <Button
          raised
          ripple
          style={{width: '100%'}}
          onClick={()=>props.handleClick(day)}
          key={day}>
            {day}
        </Button>
    </Cell>
   );

   return (
     <Card shadow={0} style={props.style}>
      <h3>Days Your Class Meets</h3>
      <CardActions border>
        <Grid>
          {days_buttons }
        </Grid>
      </CardActions>
     </Card>
   );
}


export default DaysButtons;
