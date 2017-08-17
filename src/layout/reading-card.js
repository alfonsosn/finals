import React from 'react';
import {Card, CardTitle, CardText, CardActions, Tabs, Tab} from 'react-mdl';


const Reading = (props) => {
    return(
        <Card shadow={0} style={{background: 'rgba(79, 45, 130, 1)'}}>
          <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
              <h5 style={{marginTop: '0'}}>
                Reading Day<br />
                12/13/17<br /><br />
                Finals Week<br />
                12/14/17 - 12/20/17
              </h5>
          </CardTitle>
        </Card>
      )
    }

export default Reading;
