import React, {Component} from 'react';
import './SortingVisualiser.css';
import {getMergeSortArray} from '../Sorting/SortingAlgorithms';
import {getBubbleSortArray} from '../Sorting/BubbleAlgo';
import {getQuickSortArray} from '../Sorting/QuickSortAlgo';
import ProgressBar from './ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'reactstrap';
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const MIN_BAR_HEIGHT = 10;
const TIMEOUT_TIMER_MS = 1;
const TIMEOUT_TIMER_MS_BUBBLE_SORT = 1;
const TIMEOUT_TIMER_MS_QUICK_SORT = 1;

class SortingVisualiser extends Component {

constructor(props) {
super(props);

this.state = {
    dataArray : [],
    percent : 0,
    maxBarHeght : 350,
}

}

increment = () => {
    const val = this.state.percent >= 100 ? 0 : this.state.percent + 25;
    this.setState(() => ({
      percent: val,
      maxBarHeght : 350 + val*2,
    }));

    //call random array generate
    this.getRandomNumbers();
    console.log(this.state.maxBarHeght);
}

generateRandomNumber = () => {
    const number = Math.floor(MIN_BAR_HEIGHT + Math.random()*(this.state.maxBarHeght - MIN_BAR_HEIGHT));
    //console.log(number);
    return number;
}

getRandomNumbers = () => {
   const arr = [];

    for(let x=0;x<175;x++) {
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

handleQuickVisualise = () => {
    console.log("animation started");
    const animations = getQuickSortArray(this.state.dataArray);
    //console.log("quick sort : " + animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    for(let x=0;x<animations.length;x++) {
        //first : color change
        //second : color normal
        //third : height change
        //fourth : height change
        //fifth : just height change
        //sixth : just height change
        const isColorChange = (x % 4) < 2;
        if(isColorChange) {
            
            const [barStartId, barEndId] = animations[x];
            console.log(barStartId + ":" + barEndId);
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
            }, x * TIMEOUT_TIMER_MS_QUICK_SORT);
        }
    }

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

       <div>     
        <ButtonGroup className="btn-group">
            <Button size="sm" onClick={this.handleVisualise} className="btn">Merge Sorting</Button>
            <Button size="sm" onClick={this.handleBubbleVisualise} className="btn btn-left">Bubble Sorting</Button>
            <Button size="sm" onClick={this.handleQuickVisualise} className="btn btn-left">Quick Sorting</Button>
            <Button size="sm" className="btn-new" onClick={this.getRandomNumbers}>Generate new array</Button>
        </ButtonGroup>
       
            <Button className="btnaction" size="sm" color="info" onClick={this.increment}>Length</Button>
           
            <ProgressBar data={this.state.percent}/>

            </div>

        <div>
            {dataArray.map((val, idx) => (
                 <div
                 className="array-bar"
                 key={idx}
                 style={{
                   backgroundColor: PRIMARY_COLOR,
                   height: `${val}px`,
                    width : `5px`
                }}>{val}</div>
            ))}

        </div>
            
        </div>
    )
}

}

export default SortingVisualiser;