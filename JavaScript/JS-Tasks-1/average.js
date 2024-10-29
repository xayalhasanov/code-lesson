function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    let avg = sum / arr.length;
    let roundedAvg = avg - (avg % 1);
    
    if (avg % 1 >= 0.5) {
        roundedAvg += 1;
    }
    
    return roundedAvg;
}

// Test
console.log(average([10, 30, 40, 45, 35])); // 32
