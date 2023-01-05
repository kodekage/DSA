/**
 * Bubble sort algortithm bubbles the highest items of an array to the end of
 * the array unitl the entire array is sorted 
 */

function bubbleSort(unsortedArray) {
    var noSwap;

    for (var i = unsortedArray.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                var temp = unsortedArray[j]
                unsortedArray[j] = unsortedArray[j + 1]
                unsortedArray[j + 1] = temp
                noSwap = false
            }
        }
        if (noSwap) break;
    }

    return unsortedArray;
}

console.log(bubbleSort([3, 3, 1, 4, -2, -1, -10, 0]))