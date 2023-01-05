function binarySearch(sortedArray, itemToFind) {
    let min = 0;
    let max = sortedArray.length - 1;

    let guess = (min + max) / 2;

    while (sortedArray[guess] !== itemToFind) {
        if (sortedArray[guess] === itemToFind) {
            return guess;
        } else if (sortedArray[guess] < itemToFind) {
            min = guess + 1
        } else {
            max = guess - 1
        }
    }
}