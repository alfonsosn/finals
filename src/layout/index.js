import React from 'react';
import {Layout, Header, HeaderRow, Content, Grid, Cell} from 'react-mdl';
import App from  '../App.js'


const Start = () => {

  return(
    <div style={{display: 'table-header-group', position: 'relative'}}>
      <Layout fixedHeader fixedTabs
              style={{backgroundColor: '#eaeaea'}}>

        <Content>
        <Grid className="demo-grid-1">
            <Cell col={2}></Cell>

            <Cell col={8}>
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
