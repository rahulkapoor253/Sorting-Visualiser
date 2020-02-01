export function getQuickSortArray(array) {
    //merge sort and return sorted array;
    const animations = [];//it reflects the animations for the main array;
    if(array.length <= 1) {
        return array;
    }
    //console.log(array.length);
   runQuickSort(array, 0, array.length - 1, animations);
   //console.log(array);
    return animations;
    }

function partition(mainArray, startIndex, endIndex, animations) {
    let pivot = mainArray[endIndex];

    let i = startIndex - 1;
    //we dont consider last element as it is pivot;
    for(let x=startIndex;x<=(endIndex-1);x++) {
        if(mainArray[x] < pivot) {  
            //swap elements at x and i++;
            i++;
            //push elements to animations to remove and add color;
            console.log(i + ":" + x);
            animations.push([i,x]);
            animations.push([i,x]);
            
            let temp = mainArray[i];
            mainArray[i] = mainArray[x];
            mainArray[x] = temp;

            //push new elements at swapped places;
            animations.push([i,mainArray[i]]);
            animations.push([x,mainArray[x]]);
        }
    }
    i++;
    //now swap i + 1 and endIndex elements;
    let val = mainArray[i];
    mainArray[i] = mainArray[endIndex];
    mainArray[endIndex] = val;
    //swapped elements to be pushed into animation array;
    
    //now i++ will be the position of pivot;
    return i;
}

    //pick last element as pivot and sort elements accordingly;
    function runQuickSort(mainArray, startIndex, endIndex, animations) {

        if(startIndex<endIndex) {
            let pivot = partition(mainArray, startIndex, endIndex, animations);
            //console.log(pivot);
            //console.log(startIndex + ":" + endIndex);
            runQuickSort(mainArray, startIndex, pivot - 1, animations);
            runQuickSort(mainArray, pivot + 1, endIndex, animations);
        }

        return;
    }
