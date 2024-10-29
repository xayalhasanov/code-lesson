function countDivisibles(num) {
    let count = 0;

    if (num < 50) {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0) {
                count++;
            }
        }
    } else if (num >= 50 && num < 100) {
        for (let i = 1; i <= num; i++) {
            if (i % 5 === 0) {
                count++;
            }
        }
    } else {
        for (let i = 1; i <= num; i++) {
            if (i % 8 === 0) {
                count++;
            }
        }
    }

    console.log("Cavab: " + count);
}

// Test
countDivisibles(30);  // 10
countDivisibles(75);  // 15
countDivisibles(120); // 15
