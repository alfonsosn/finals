import React from 'react';
import {Card, CardActions, Tabs, Tab} from 'react-mdl';

const HoursMenu = (props) =>{
  return(
    <Card shadow={0} style={{width: 'auto', margin: '10px 0px'}}>
      <h3>Number of Hours You Meet Weekly</h3>
      <CardActions border>
        <Tabs>
          <Tab
          raised
          ripple
          onClick={() => props.handleClick(5)}
          >
            Less Than 3hrs
          </Tab>
          <Tab
            raised
            ripple
            onClick={() => props.handleClick(3)}
            >
              Combined 3hrs
            </Tab>
            <Tab
            raised
            ripple
            onClick={() => props.handleClick(4)}
            >
              Combined 4hrs
            </Tab>
          </Tabs>
        </CardActions>
    </Card>
  )
}

export default HoursMenu;
