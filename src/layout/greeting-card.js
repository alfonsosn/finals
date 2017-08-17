import React from 'react';
import {Card, CardTitle, CardText, CardActions, Tabs, Tab} from 'react-mdl';


const Greeting = (props) => {
    return(
        <Card shadow={0}
              style={{width: '100%'}}>
          <CardTitle
              style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                  Hunter College
                  Office of the Registrar
          </CardTitle>
          <CardText>
              <h5>Find your finals schedule with this application.</h5>
              <p>Final exam dates often vary from the days and times listed. It is required that students check with their instructors regarding the exam date prior to final exam week:</p>
              <p>(12/13/17 - 12/20/17)</p>
          </CardText>
        </Card>
    )
  }

export default Greeting;
