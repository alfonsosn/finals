import React from 'react';
import {Layout, Header, HeaderRow, Content, Grid, Cell} from 'react-mdl';
import App from  '../App.js'


const Start = () => {

  return(
    <div style={{display: 'table-header-group', position: 'relative'}}>
      <Layout fixedHeader fixedTabs
              style={{backgroundColor: 'lightgrey'}}>

        <Header style={{background: 'purple'}}>
            <HeaderRow
                title="Hunter College - Finals Scheduler, Fall 2017"/>
        </Header>

        <Content>
        <Grid className="demo-grid-1">
            <Cell col={2}></Cell>

            <Cell col={8} style={{backgroundColor: 'white',
                                  boxShadow: '0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)'}}>
                <App/>
            </Cell>

            <Cell col={2}></Cell>
        </Grid>
        </Content>

      </Layout>
    </div>
  )
}

export default Start;
