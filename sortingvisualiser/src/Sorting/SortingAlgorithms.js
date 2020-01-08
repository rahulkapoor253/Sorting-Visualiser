export function getMergeSortArray(array) {
//merge sort and return sorted array;
const animations = [];//it reflects the animations for the main array;
if(array.length <= 1) {
    return array;
}
console.log(array);
const tempArray = array.slice();
console.log("length of array: " + array.length);
runMergeSort(array, 0, array.length - 1, tempArray, animations);
return animations;
}

function runMergeSort(mainArray, startIndex, endIndex, tempArray, animations) {
console.log("indexes are : " + startIndex + ":" + endIndex)
    if(startIndex === endIndex) {
        return;
    }
    else {
    //to get lower value;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    
    runMergeSort(tempArray, startIndex, middleIndex, mainArray, animations);
    runMergeSort(tempArray, middleIndex + 1, endIndex, mainArray, animations);
    runMerging(mainArray, startIndex, middleIndex, endIndex, tempArray, animations);
    }
}

function runMerging(mainArray, startIndex, middleIndex, endIndex, tempArray, animations) {

   let i=startIndex;
   let j=middleIndex + 1;
   let k = startIndex;//for main Array;
   
   while(i<=middleIndex && j<=endIndex) {
    //we push the elements to change color of div;   
    animations.push([i,j]);

    //we push second time to rever color;
    animations.push([i,j]);

    if(tempArray[i] <= tempArray[j]) {
            animations.push([k, tempArray[i]]);
            //overwrite value in original array;
            mainArray[k] = tempArray[i];
            k++;
            i++;
       }
    else {
        animations.push([k, tempArray[j]]);
        //overwrite val of j in main array;
        mainArray[k] = tempArray[j];
        k++;
        j++;
    }   

   }

   //if startindex reaches middle first;
   while(j<=endIndex) {
       animations.push([j,j]);
       animations.push([j,j]);
    animations.push([k, tempArray[j]]);

    mainArray[k] = tempArray[j];
    k++;
    j++;
   }

   //if endindex reaches end first;
   while(i<=middleIndex) {
       animations.push([i,i]);
       animations.push([i,i]);
        animations.push([k, tempArray[i]]);
       
        mainArray[k] = tempArray[i];
        k++;
        i++;
   }

}
