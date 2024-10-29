function getMonthName(num) {
    if (num < 1 || num > 12) {
        return "invalid input";
    }

    let monthNames = [
        "Yanvar", "Fevral", "Mart", "Aprel",
        "May", "Iyun", "Iyul", "Avqust",
        "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
    ];

    return monthNames[num - 1]; // Array indeksi 0-dan başlayır
}

// Test
console.log(getMonthName(5));   // May
console.log(getMonthName(12));  // Dekabr
console.log(getMonthName(0));   // invalid input
console.log(getMonthName(13));  // invalid input
