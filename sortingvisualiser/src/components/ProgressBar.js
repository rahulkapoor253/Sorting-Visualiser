import React, { Component } from 'react';
import { Progress, Button } from 'reactstrap';

class ProgressBar extends Component {
    
  render() {
    return (
      <div style={{
        marginBottom : '16px',
     }}>
         <Progress color="success" value={this.props.data} />
      </div>
    )
  }
}


export default ProgressBar;
