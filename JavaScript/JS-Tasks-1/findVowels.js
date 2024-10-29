function findVowels(sentence) {
    let vowelCount = 0;
    let vowels = "aeiouəıöüAEIOUƏIÖÜ";

    for (let i = 0; i < sentence.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (sentence[i] === vowels[j]) {
                vowelCount++;
                break;
            }
        }
    }
    
    return vowelCount;
}

// Test
console.log(findVowels("salam necesen?")); // 5
