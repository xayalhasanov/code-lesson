function FindEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}

// Test
console.log(FindEven([3, 5, 7])); // true
console.log(FindEven([2, 3, 5, 7, 8])); // false
