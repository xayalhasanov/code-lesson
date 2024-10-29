function assessRecipe(ingredients, fatty) {
    let difficulty;
    let health;

    if (ingredients > 10) {
        difficulty = "Çətin";
        if (fatty > 3) {
            health = "Sağlam deyil";
        } else {
            health = "Orta Sağlam"; // "Çətin" olduğu üçün bu vəziyyət ehtimalı azdır.
        }
    } else if (ingredients >= 5 && ingredients <= 10) {
        difficulty = "Orta";
        if (fatty >= 1 && fatty <= 3) {
            health = "Orta Sağlam";
        } else {
            health = "Sağlam"; // Yağlı maddə yoxdursa.
        }
    } else {
        difficulty = "Asan";
        if (fatty === 0) {
            health = "Sağlam";
        } else {
            health = "Sağlam deyil"; // Yağlı maddə varsa.
        }
    }

    return {
        difficulty: difficulty,
        health: health
    };
}

// Test
console.log(assessRecipe(12, 4));  // { difficulty: 'Çətin', health: 'Sağlam deyil' }
console.log(assessRecipe(8, 2));   // { difficulty: 'Orta', health: 'Orta Sağlam' }

