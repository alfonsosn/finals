import React from 'react';
import {Button} from 'react-mdl';

const HoursButtons = (props) =>{
  return(
    <div>
      <Button
            raised
            ripple
            onClick={props.handleClick.bind(this, 3)}
            >
                  3 hours
        </Button>
        <Button
            raised
            ripple
            onClick={props.handleClick.bind(this, 4)}
            >
                  4 hours
        </Button>
        <Button
            raised
            ripple
            onClick={props.handleClick.bind(this, 5)}
            >
                  100-120-150
        </Button>
    </div>
  )
}

export default HoursButtons;
