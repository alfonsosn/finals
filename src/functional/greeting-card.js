import React from 'react';
import {Card, CardTitle, CardText, CardActions, Tabs, Tab} from 'react-mdl';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 1 };
    }

  render(){
    return(
        <Card shadow={0}
              style={{width: 'auto'}}>
          <CardTitle
              style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                  Welcome
          </CardTitle>
          <CardText>
              Find out your finals schedule with this application.
          </CardText>
          <CardActions>
            <Tabs activeTab={this.state.activeTab}
                  onChange={(tabId) => this.setState({ activeTab: tabId })}
                  ripple>
                    <Tab>Undergrad</Tab>
                    <Tab>Graduate</Tab>
            </Tabs>
          </CardActions>
        </Card>
    )
  }
}

export default Greeting;
