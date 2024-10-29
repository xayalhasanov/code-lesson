function calculateDelivery(amount, premium) {
    let time;
    let cost;

    if (premium) {
        time = "1 gün";
        cost = 0;
    } else if (amount > 150) {
        time = "2 gün";
        cost = 0;
    } else if (amount >= 100 && amount <= 150) {
        time = "3 gün";
        cost = 20;
    } else {
        time = "5 gün";
        cost = 30;
    }

    return {
        deliveryTime: time,
        shippingCost: cost
    };
}

// Test
console.log(calculateDelivery(200, true));   // { deliveryTime: '1 gün', shippingCost: 0 }
console.log(calculateDelivery(160, false));  // { deliveryTime: '2 gün', shippingCost: 0 }

