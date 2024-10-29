function isPerfectNumber(num) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log(num + " mükəmməl ədəddir.");
    } else {
        console.log(num + " mükəmməl ədəd deyil.");
    }
}

// Test
isPerfectNumber(28); // 28 mükəmməl ədəddir.
isPerfectNumber(10); // 10 mükəmməl ədəd deyil.
