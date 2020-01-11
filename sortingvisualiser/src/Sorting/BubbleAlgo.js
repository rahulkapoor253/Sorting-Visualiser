export function getBubbleSortArray(array) {
    //merge sort and return sorted array;
    const animations = [];//it reflects the animations for the main array;
    if(array.length <= 1) {
        return array;
    }
   runBubbleSort(array, 0, array.length - 1, animations);
    return animations;
    }

    function runBubbleSort(mainArray, startIndex, endIndex, animations ) {
       
        for(let i=startIndex;i<endIndex;i++) {
            for(let j=startIndex;j<endIndex-startIndex;j++) {
                //both j and j+1 are compared;
                if(mainArray[j]>mainArray[j+1]) {
                    animations.push([j,j+1]);
                    animations.push([j,j+1]);
                    //swap both;
                    let temp = mainArray[j];
                    mainArray[j] = mainArray[j+1];
                    mainArray[j+1] = temp;
                    //push new element to the animation;
                    animations.push([j, mainArray[j]]);
                    animations.push([j+1, mainArray[j+1]]);
                }
                
            }
        }

    }