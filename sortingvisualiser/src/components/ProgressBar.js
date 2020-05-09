import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class ProgressBar extends Component {
    
  render() {
    return (
      <div style={{
        marginBottom : '16px',
        width : '350px',
        position : 'relative'
     }}>
         <Progress bar color="success" value={this.props.data}>
           Bar Length
         </Progress>
      </div>
    )
  }
}


export default ProgressBar;
