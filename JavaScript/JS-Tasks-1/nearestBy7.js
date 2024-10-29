function nearestDivisibleBy7(num) {
    if (num % 7 === 0) {
        console.log("7 yə bölünür");
    } else {
        let lower = num - (num % 7);
        let higher = lower + 7;

        if (num - lower < higher - num) {
            console.log(lower);
        } else {
            console.log(higher);
        }
    }
}

// Test
nearestDivisibleBy7(17); // 14
nearestDivisibleBy7(19); // 21
nearestDivisibleBy7(21); // 7 e bolunur
