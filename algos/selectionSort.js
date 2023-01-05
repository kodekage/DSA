function selectionSort(unsortedArray) {
    for (let i = 0; i < unsortedArray.length; i++) {
        var smallest = i;
        for (let j = i + 1; j < unsortedArray.length; j++) {
            if (unsortedArray[j] < unsortedArray[smallest]) {
                smallest = j;
           }
        }

        var temp = unsortedArray[i]
        unsortedArray[i] = unsortedArray[smallest]
        unsortedArray[smallest] = temp
    }

    return unsortedArray;
}

console.log(selectionSort([34, 22, 10, 19, 17]))