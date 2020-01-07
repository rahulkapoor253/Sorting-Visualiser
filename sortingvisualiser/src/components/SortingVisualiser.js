import React, {Component} from 'react';

const PRIMARY_COLOR = 'turquoise';

class SortingVisualiser extends Component {

constructor(props) {
super(props);

this.state = {
    dataArray : [],
}

}

generateRandomNumber = () => {
    const min = 1;
    const max = 700;
    const number = Math.floor(min + Math.random()*(max-min));
    return number;
}

getRandomNumbers = () => {
   const arr = [];
    for(let x=0;x<50;x++) {
        arr.push(this.generateRandomNumber());
   } 

   //set array to state;
   this.setState({
       dataArray : arr
   })

}

componentDidMount() {
    //fill the state with random numbers;
    this.getRandomNumbers();
}

render() {
    const {dataArray} = this.state;
    
    return (
        <div className="array-container">
            
        <div>
            <button>Visualise Sorting</button>
        </div>

            {dataArray.map((val, idx) => (
                 <div
                 key={idx}
                 style={{
                   backgroundColor: PRIMARY_COLOR,
                   height: `${val}px`,
                   width: '4px',
                   display: 'inline-block',
                   margin: '0 1px',
                   color: 'transparent'
                }}>{val}</div>
            ))}
            
        </div>
    )
}

}

export default SortingVisualiser;