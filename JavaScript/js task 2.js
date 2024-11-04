//    d

//  muellim komp teze aldigima gore pushu gec etdim uzrlu sayin bal kesmiyin:)
 let eded = prompt("3 reqemli eded  daxil edin:");

 let r1 = parseInt(eded[0]);
 let r2 = parseInt(eded[1]);
 let r3 = parseInt(eded[2]);

 let cem = r1 + r2 + r3;
 let hasil = r1 * r2 * r3;

 let orta = cem / 3;

console.log(`reqemleri cemi:`,cem);
 console.log(`reqemlerihasil: `,hasil);
 console.log(`ededi ortasi:`,orta);

// // =====================================================================================


 let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;


function countSpaces(text) {
     let spaceCount = 0;
    
  
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            spaceCount++; 
        }
    }
    
    return spaceCount;
}

let numberOfSpaces = countSpaces(sampleNews);

console.log(`Mətnin içindəki boşluqların sayı:`, numberOfSpaces);

// =======================================================================================




function countPunctuation(text) {
    let commaCount = 0;
    let periodCount = 0;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ',') {
            commaCount++; 
        } else if (text[i] === '.') {
            periodCount++; 
        }
    }
    
    return { commaCount, periodCount };
}

let punctuationCounts = countPunctuation(sampleNews);

console.log(`Mətnin içindəki vergül sayı:`,punctuationCounts.commaCount);
console.log(`Mətnin içindəki nöqtə sayı: `,punctuationCounts.periodCount);


// =====================================================================================


function countWords(text) {
    let wordsArray = text.trim().split(/\s+/); 
    return wordsArray.length; 
}

let numberOfWords = countWords(sampleNews);

console.log(`Mətnin içindəki sözlərin sayı:1`, numberOfWords);

// ========================================================================================


const fruits = ["alma", "banan", "qarpiz", "portağal  ", "ananas", "nar"];

function findLongestWord(arr) {
    let longestWord = "";

    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i].trim();
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }

    return longestWord;
}

const longestFruit = findLongestWord(fruits);

console.log(`Array daxilindəki ən uzun söz:`,longestFruit);
// -------------------------------------------------------------------------

const products = [
    {
        id: 1,
        title: "Smartphone",
        description: "A high-end smartphone with the latest features.",
        price: 799.99,
    },
    {
        id: 2,
        title: "Laptop",
        description: "Powerful laptop with a large screen and fast processor.",
        price: 1299.99,
    },
    {
        id: 3,
        title: "Coffee Maker",
        description: "An automatic coffee maker with a built-in grinder.",
        price: 99.99,
    },
    {
        id: 4,
        title: "Headphones",
        description: "Wireless over-ear headphones with noise-cancellation.",
        price: 199.99,
    },
    {
        id: 5,
        title: "Smart TV",
        description: "55-inch 4K Smart TV with streaming apps built-in.",
        price: 699.99,
    },
];

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

console.log(`Məhsullarin qiymətləri cəmi: $${totalPrice.toFixed(2)}`);


// ======================================================

const averagePrice = totalPrice / products.length;

console.log(`Məhsulların qiymətləri ortalaması:`,averagePrice.toFixed(2));

// -------------------------------------------------------------------------------------------------