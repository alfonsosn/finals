import React from 'react';
import {Card} from 'react-mdl';


const PartiallyHidden = (props) => {
    return(
      <Card shadow={0} style={{filter: "blur(10px)", width: 'auto', margin: '10px 0px', filter: 'blur(10px)' }}>
       <h3>{props.title}</h3>
      </Card>
    )
  }

export default PartiallyHidden;
