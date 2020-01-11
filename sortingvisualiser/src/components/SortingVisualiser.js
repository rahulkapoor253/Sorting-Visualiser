import React, {Component} from 'react';
import './SortingVisualiser.css';
import {getMergeSortArray} from '../Sorting/SortingAlgorithms';
import {getBubbleSortArray} from '../Sorting/BubbleAlgo';

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'black';
const MIN_BAR_HEIGHT = 10;
const MAX_BAR_HEIGHT = 700;
const TIMEOUT_TIMER_MS = 2;
const TIMEOUT_TIMER_MS_BUBBLE_SORT = 1;

class SortingVisualiser extends Component {

constructor(props) {
super(props);

this.state = {
    dataArray : [],
}

}

generateRandomNumber = () => {
    const number = Math.floor(MIN_BAR_HEIGHT + Math.random()*(MAX_BAR_HEIGHT-MIN_BAR_HEIGHT));
    //console.log(number);
    return number;
}

getRandomNumbers = () => {
   const arr = [];
    for(let x=0;x<200;x++) {
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

handleBubbleVisualise = () => {
    const animations = getBubbleSortArray(this.state.dataArray);
    //handle animation on array-bars;
    console.log("buble sort: " + animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    for(let x=0;x<animations.length;x++) {
        //first : color change
        //second : color normal
        //third : height change
        //fourth : height change
        const isColorChange = (x % 4) < 2;
        if(isColorChange) {
            const [barStartId, barEndId] = animations[x];
            const barStartIdStyle = arrayBars[barStartId].style;
            const barEndIdStyle = arrayBars[barEndId].style;

            //change color when the set of 3 in animation appears first time;
            const color = (x % 4) === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            //console.log(color);
            setTimeout(() => {
                barStartIdStyle.backgroundColor = color;
                barEndIdStyle.backgroundColor = color;
            }, x * TIMEOUT_TIMER_MS);

        }
        else {
            setTimeout(() => {
                const [barId, newHeight] = animations[x];
                const barIdStyle = arrayBars[barId].style;
                barIdStyle.height = `${newHeight}px`;
            }, x * TIMEOUT_TIMER_MS_BUBBLE_SORT);
        }
    }

}

handleVisualise = () => {
    //visualise array bar logic after merge sort;
    const animations = getMergeSortArray(this.state.dataArray);
    //handle animations on array bars;
    console.log(animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    console.log(arrayBars);
    for(let x=0;x<animations.length;x++) {
        //on value = 2 it will change the height of the bar;
        const isColorChange = (x % 3) !== 2;
        if(isColorChange) {
            const [barStartId, barEndId] = animations[x];
            const barStartIdStyle = arrayBars[barStartId].style;
            const barEndIdStyle = arrayBars[barEndId].style;

            //change color when the set of 3 in animation appears first time;
            const color = (x % 3) === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            //console.log(color);
            setTimeout(() => {
                barStartIdStyle.backgroundColor = color;
                barEndIdStyle.backgroundColor = color;
            }, x * TIMEOUT_TIMER_MS);

        }
        else {
            setTimeout(() => {
                const [barId, newHeight] = animations[x];
                const barIdStyle = arrayBars[barId].style;
                barIdStyle.height = `${newHeight}px`;
            }, x * TIMEOUT_TIMER_MS);
        }

    }

}

render() {
    const {dataArray} = this.state;
    
    return (
        <div className="array-container">
            
        <div className="top-container">
            <button onClick={this.handleVisualise} className="btn">Merge Sorting</button>
            <button onClick={this.handleBubbleVisualise} className="btn btn-left">Bubble Sorting</button>
            <button className="btn-new" onClick={this.getRandomNumbers}>Generate new array</button>
        </div>

            {dataArray.map((val, idx) => (
                 <div
                 className="array-bar"
                 key={idx}
                 style={{
                   backgroundColor: PRIMARY_COLOR,
                   height: `${val}px`,
                }}>{val}</div>
            ))}
            
        </div>
    )
}

}

export default SortingVisualiser;