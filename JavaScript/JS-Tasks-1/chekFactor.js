function checkFactors(arr, num) {
    let isFactor = true;
    
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] !== 0) {
            isFactor = false;
            break;
        }
    }
    
    return isFactor;
}

// Test
console.log(checkFactors([2, 3, 4, 6], 12)); // true
console.log(checkFactors([2, 3, 4, 5], 12)); // false
