import React from 'react';
import {Button} from 'react-mdl';

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
     <div>
     <h3> Which day a week? </h3>
          {listItems}
     </div>
   );
}


export default DaysButtons;