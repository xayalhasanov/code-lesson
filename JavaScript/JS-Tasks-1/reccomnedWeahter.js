function recommend(temperature, hour) {
    if (temperature > 30 && hour >= 12 && hour < 15) {
        return "Çimərlik geyimi geyinin və üzməyə gedin.";
    } else if (temperature >= 20 && temperature <= 30 && hour >= 6 && hour < 12) {
        return "Yüngül idman geyimi geyinin və qaçışa çıxın.";
    } else if (temperature >= 10 && temperature < 20) {
        return "Gödəkçə geyinin və gəzintiyə çıxın.";
    } else if (temperature < 10 && hour >= 18 && hour < 24) {
        return "Qalın palto geyinin və evdə qalın.";
    } else {
        return "Mövcud hava şəraiti üçün uyğun tövsiyə yoxdur.";
    }
}

// Test
console.log(recommend(32, 13)); // Çimərlik geyimi geyinin və üzməyə gedin.
console.log(recommend(25, 10)); // Yüngül idman geyimi geyinin və qaçışa çıxın.

