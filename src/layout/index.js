import React from 'react';
import {Layout, Header, HeaderRow, Content, Grid, Cell} from 'react-mdl';
import Greeting from './greeting-card.js'
import Reading from './reading-card.js'
import App from  '../App.js'


const Start = () => {

  return(
    <div style={{display: 'table-header-group', position: 'relative'}}>
      <Layout fixedHeader fixedTabs
              style={{backgroundColor: '#eaeaea'}}>
           <Header>
               <HeaderRow title="Finals 2017" />
           </Header>
        <Content>
        <Grid className="demo-grid-1">
            <Cell col={2} tablet={12} phone={12}>
              <Greeting/>
            </Cell>

            <Cell col={8}>
                <App/>
            </Cell>

            <Cell col={2}>

            </Cell>
        </Grid>
        </Content>

      </Layout>
    </div>
  )
}

export default Start;
