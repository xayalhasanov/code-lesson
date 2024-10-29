function findBigNumber(arr, num) {
    let maxNumber = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= num && arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber === -Infinity ? null : maxNumber;
}

// Test
console.log(findBigNumber([11, 2, 32, 4, 57, 6], 45)); // 32
