import React from 'react';
import {Button, Card, CardActions} from 'react-mdl';

const DaysButtons = (props) => {
  const array = props.args;
  const listItems = array.map((element) =>
     <Button
        raised
        ripple
        onClick={()=>props.func(element)}
        key={element}
        >
          {element}
    </Button>
   );

   return (
     <Card shadow={0} style={{width: 'auto'}}>
      <h2>Which day a week?</h2>
      <CardActions border>
        {listItems}
      </CardActions>
     </Card>
   );
}


export default DaysButtons;
