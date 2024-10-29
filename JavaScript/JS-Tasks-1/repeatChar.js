function repeatCharacter(char, num) {
    let result = "";
    
    for (let i = 0; i < num; i++) {
        result += char;
    }

    return result;
}

// Test
console.log(repeatCharacter('b', 3)); // bbb
console.log(repeatCharacter('x', 2)); // xx
