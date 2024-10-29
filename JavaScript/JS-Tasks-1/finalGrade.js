function calculateGrade(grade, activities) {
    let bonus = 0;

    if (grade >= 85 && activities > 3) {
        bonus = 5;
    } else if (grade >= 70 && grade < 85 && activities >= 2) {
        bonus = 3;
    } else if (grade >= 60 && grade < 70 && activities === 1) {
        bonus = 2;
    }

    let finalGrade = grade + bonus;

    if (finalGrade > 100) {
        finalGrade = 100;
    }

    return finalGrade;
}

// Test
console.log(calculateGrade(88, 4));  // 93
console.log(calculateGrade(75, 2));  // 78

